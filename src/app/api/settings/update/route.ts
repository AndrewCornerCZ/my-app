import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { options } from '../../auth/[...nextauth]/options'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'

type UpdateData = {
  username?: string
  password?: string
  bio?: string | null
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(options)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const { username, currentPassword, newPassword, bio } = await req.json()

    // Get current user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // If changing password, verify current password
    if (currentPassword) {
      const isValid = await bcrypt.compare(currentPassword, user.password)
      if (!isValid) {
        return NextResponse.json({ error: 'Current password is incorrect' }, { status: 400 })
      }
    }

    // Update user data
    const updateData: UpdateData = {}
    
    if (username && username !== user.username) {
      // Check if username is already taken
      const existingUser = await prisma.user.findUnique({
        where: { username }
      })
      
      if (existingUser) {
        return NextResponse.json({ error: 'Username already taken' }, { status: 400 })
      }
      
      updateData.username = username
    }

    if (newPassword) {
      updateData.password = await bcrypt.hash(newPassword, 10)
    }

    // Add bio update
    if (bio !== undefined && bio !== user.bio) {
      // Validate bio length if needed
      if (bio.length > 160) {
        return NextResponse.json({ 
          error: 'Bio must be 160 characters or less' 
        }, { status: 400 })
      }
      updateData.bio = bio
    }

    // Only update if there are changes
    if (Object.keys(updateData).length > 0) {
      await prisma.user.update({
        where: { email: session.user.email },
        data: {
          ...(username && username !== user.username ? { username } : {}),
          ...(newPassword ? { password: await bcrypt.hash(newPassword, 10) } : {}),
          ...(bio !== undefined && bio !== user.bio ? { bio } : {})
  }
      })
      
      // Return flag to indicate that user should be logged out
      return NextResponse.json({ 
        message: 'Settings updated successfully',
        shouldLogout: true 
      })
    }

    return NextResponse.json({ message: 'No changes made' })
  } catch (error) {
    console.error('Settings update error:', error)
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    )
  }
}