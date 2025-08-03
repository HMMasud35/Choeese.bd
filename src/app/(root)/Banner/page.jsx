import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { PiMapPinArea } from 'react-icons/pi'
import Image from 'next/image'
import Slider from './Component/Slider'

const Banner = () => {
  return (
    <section>
      <div className="container">
        <div className='grid grid-cols-12 h-80'>
          <div className='col-start-1 col-end-10'>
            <Slider />
          </div>
          <div className='col-start-10 col-end-13 p-3 bg-gradient-to-br bg-gray-950/10'>
            <button className='bg-[url(/Location.png)] w-full h-35 p-3 cursor-pointer border-2 border-gray-700'>
              <h4 className='text-xl font-semibold m-auto text-center'>
                <PiMapPinArea className='text-5xl m-auto' />Select your delivery location</h4>
            </button>
            <div className='grid grid-cols-2 mt-7 items-center gap-4'>
              <div className='col-1 '>
                <Image className='w-full' width={800} height={800} src="/QR-Code.png" alt='Profilepic.png' />
              </div>
              <div className='col-2'>
                <button className='border-1 text-sm w-30 px-2 py-1 rounded-xl cursor-pointer flex items-center mt-3'>
                  <FaGooglePlay className='text-xl mr-2' />
                  Google Play</button>
                <button className='border-1 text-sm w-30 px-2 py-1 rounded-xl cursor-pointer flex items-center my-3'>
                  <FaApple className='text-xl mr-2' />
                  App Store</button>
                <p className='text-sm'>Download the <br />App Now!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner