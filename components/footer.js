import React from 'react'
import Newsletter from './newsletter'

function Footer() {
  return (
    <footer className='bg-gray-50'>
      <div className='container mx-auto flex justify-center py-12'>
        <div className='py-5'>
           <div className="flex gap-6 justify-center"></div>

           <p className='py-5 text-gray-400'>Copyright 2023 All rights reserved | This website was created for educational perpouses by Briant Robert Mengana</p>
           <p className='text-gray-400 text-center'>Terms & Condition</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
