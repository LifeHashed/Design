import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function Hero() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center overflow-hidden mx-auto py-10 md:py-0'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <Spotlight
        className="top-0 right-0 md:right-60 md:-top-20"
        fill="red"
        />
      

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-old bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>MEDNEX</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'><i>&quot;A single user-friendly interface bringing together the world of medical science by bridging the gap between patients doctors and hospital management under the canopy of the integrated software -- MEDNEX&quot;</i></p>
      </div>
      <div className="mt-4">
        <Link href="/signup">
        <Button borderRadius='1.25rem' className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 '>
        SignUp
        </Button>
        
        </Link>

        
      </div>

    </div>
  )
}

export default Hero
