import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full mt-20">
            <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
                
                <div className="max-w-96">
                    <img className='max-w-50' src={assets.logo2} alt="" />
                    <p className="mt-6 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem recusandae saepe in distinctio cum consequuntur?
                    </p>
                </div>
        
                <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
                    <div>
                        <h2 className="font-semibold text-gray-900 mb-5 text-lg">COMPANY</h2>
                        <ul className="text-md text-gray-500 space-y-2 list-none">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-900 mb-5 text-lg">GET IN TOUCH</h2>
                        <div className="text-md text-gray-500 space-y-2 list-none">
                            <li><a href="#">+1-212-456-7890</a></li>
                            <li><a href="#">aptiq@gmail.com</a></li>
                        </div>
                    </div>
                </div>
        
            </div>
            <p className="py-4 text-center text-xs md:text-sm text-gray-500">
                Copyright 2026 © Aptiq. All Right Reserved.
            </p>
        </footer>
  )
}

export default Footer
