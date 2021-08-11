import React from 'react'

export const HeroRight = ({ children }) => (
  <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:flex-col lg:justify-center">
    {children}
  </div>
)

export const HeroLeft = ({ children }) => (
  <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
    {children}
  </div>
)

const Hero = ({ children }) => (
  <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:flex lg:items-center">
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">{children}</div>
  </main>
)

export default Hero
