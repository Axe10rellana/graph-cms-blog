import React from 'react'
import { SocialIcons } from '..'

const Footer = () => {
  const anioActual = new Date().getFullYear()
  return (
    <footer className="mt-8 bg-gray-900 text-white">
      <div
        className="grid grid-cols-1 gap-10 pt-8 pb-8
      text-center text-sm text-gray-400 sm:grid-cols-2 lg:grid-cols-3"
      >
        <span>© {anioActual} Axe10rellana. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons />
      </div>
    </footer>
  )
}

export default Footer
