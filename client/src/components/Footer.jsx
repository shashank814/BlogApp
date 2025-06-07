import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/5 pt-12 pb-6 text-gray-700'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>

        <div>
          <img src={assets.logo} alt="logo" className='w-32 mb-4' />
          <p className='text-sm leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae rerum a tempore sed distinctio possimus totam itaque neque omnis!
          </p>
        </div>

        {footer_data.map((section, index) => (
          <div key={index}>
            <h3 className='text-lg font-semibold mb-3'>{section.title}</h3>
            <ul className='space-y-2'>
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className='text-sm hover:text-primary transition-colors duration-200'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      <p className='text-center text-xs text-gray-500 mt-10 pt-6 border-t border-gray-200'>
        © 2025 QuickBlog — All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
