//importaciones
import React, { useState, useEffect } from 'react'

//componentes de next
import Link from 'next/link'

//servicios
import { getCategories } from '../../services'

const Header = () => {
  //variables de estado
  const [categories, setCategories] = useState([])

  //useEffect
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className="mb-8 inline-block w-full border-b border-blue-400 py-8">
      <div className="block md:float-left">
        <Link href="/">
          <span className="cursor-pointer text-4xl font-bold text-white">
            Graph CMS
          </span>
        </Link>
      </div>
      <div className="hidden md:float-left md:contents">
        {categories.map((category, index) => (
          <Link key={index} href={`/category/${category.slug}`}>
            <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header
