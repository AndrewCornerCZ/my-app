'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'

const ActivitiesMapPage = dynamic(() => import('@/components/mapPageComponent'), { ssr: false })

export default function Page() {
  return (
    <>
      <Navbar />
      <ActivitiesMapPage />
    </>
  )
}