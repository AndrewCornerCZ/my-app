// src/app/api/activities/nearby/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

// Haversine formula to calculate distance between two coordinates in km
function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371 // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c
  return distance
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const lat = parseFloat(searchParams.get('lat') || '0')
    const lng = parseFloat(searchParams.get('lng') || '0')
    const radius = parseFloat(searchParams.get('radius') || '10') // default 10km

    if (isNaN(lat) || isNaN(lng)) {
      return NextResponse.json(
        { message: 'Invalid coordinates' },
        { status: 400 }
      )
    }

    // Get all activities with location data
    const allActivities = await prisma.sportActivity.findMany({
      where: {
        latitude: { not: null },
        longitude: { not: null },
        date: { gte: new Date() }, // Only future activities
      },
      include: {
        sport: {
          select: {
            id: true,
            name: true,
            emoji: true,
          },
        },
        user: {
          select: {
            username: true,
          },
        },
      },
    })

    // Filter activities within radius using Haversine formula
    const nearbyActivities = allActivities.filter(activity => {
      if (activity.latitude === null || activity.longitude === null) {
        return false
      }

      const distance = calculateDistance(
        lat,
        lng,
        activity.latitude,
        activity.longitude
      )

      return distance <= radius
    })

    // Sort by distance
    const sortedActivities = nearbyActivities
        .map(activity => ({
        ...activity,
        distance: calculateDistance(lat, lng, activity.latitude!, activity.longitude!)
        }))
        .sort((a, b) => a.distance - b.distance)
      .map(({distance, ...activity }) => activity) // eslint-disable-line @typescript-eslint/no-unused-vars

    return NextResponse.json({
      activities: sortedActivities,
      count: sortedActivities.length,
      
    })
  } catch (error) {
    console.error('Error fetching nearby activities:', error)
    return NextResponse.json(
      { message: 'Failed to fetch nearby activities' },
      { status: 500 }
    )
  }
}