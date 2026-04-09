import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='mb-80'>
      <>
      <h1 className="text-3xl font-semibold text-center mx-auto mb-20">ABOUT US</h1>
      
      <div className=" flex flex-col sm:flex-row justify-center gap-4 ">
          <img className="w-full sm:max-w-96 rounded-lg "
              src={assets.about_image} alt="" />
          <div className='flex-1  rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 -mt-20 sm:mt-0'>
              <p className="text-lg ">
                 Welcome to Aptiq, your trusted partner in managing your healthcare needs conveniently and efficiently.Our vision at Aptiq is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers.
              </p>
              <p className='text-lg font-semibold text-left mx-auto mt-5'>
                WHY CHOOSE US
              </p>
              <div className="flex flex-col gap-4 mt-3">
                  <div className="flex items-center gap-4">
                      <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                            </div>
                      <div>
                          <h3 className="text-lg ">Efficiency</h3>
                          <p className="text-md font-medium text-slate-500">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                            </div>
                      <div>
                          <h3 className="text-lg font-medium ">Convenience</h3>
                          <p className="text-md text-slate-500">Access to a network of trusted healthcare professionals in your area.</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                        </div>
                      <div>
                          <h3 className="text-lg font-medium ">Personalization</h3>
                          <p className="text-md text-slate-500">Tailored recommendations and reminders to help you stay on top of your health.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </>
      
    </div>
  )
}

export default About
