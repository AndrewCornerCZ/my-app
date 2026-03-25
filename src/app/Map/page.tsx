'use client'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

const ActivitiesMapPage = dynamic(() => import('@/components/mapPageComponent'), { ssr: false })

export default function Page() {
  const router = useRouter()

  return (
    <div className="w-full h-screen flex flex-col bg-gray-950">
      {/* MOBILE - HEADER - Logo + Back button */}
      <div className="h-16 md:hidden bg-gray-950/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 z-50 flex-shrink-0">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200 flex-shrink-0"
          aria-label="Go back"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        {/* Logo - center */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/assety/BEFIT_Logo.png"
            alt="BeFit"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Spacer na right (aby logo bylo vycentrované) */}
        <div className="w-10" />
      </div>

      {/* DESKTOP - NAVBAR */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* MAPA */}
      <div className="flex-1 overflow-hidden">
        <ActivitiesMapPage />
      </div>
    </div>
  )
}