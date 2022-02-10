//importaciones
import React from 'react'

//componentes de next
import Link from 'next/link'

//react-icons
import { FiLinkedin, FiGithub } from 'react-icons/fi'

const SocialIcons = () => {
  return (
    <div className="text-teal-500">
      <span
        className="mx-1.5 inline-flex cursor-pointer items-center
          rounded-full bg-gray-700 p-2 text-xl duration-300 hover:bg-teal-500
          hover:text-gray-100"
      >
        <Link href="https://github.com/Axe10rellana">
          <a target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
        </Link>
      </span>
      <span
        className="mx-1.5 inline-flex cursor-pointer items-center
          rounded-full bg-gray-700 p-2 text-xl duration-300 hover:bg-teal-500
          hover:text-gray-100"
      >
        <Link href="https://www.linkedin.com/in/axel-orellana/">
          <a target="_blank" rel="noreferrer">
            <FiLinkedin />
          </a>
        </Link>
      </span>
    </div>
  )
}

export default SocialIcons
