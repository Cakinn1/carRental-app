import React from 'react'
import { BsApple, BsGooglePlay } from 'react-icons/bs'

export default function HomeDownloadAppsLeft() {
  return (
    <div className="flex mt-[100px] z-20">
    <div className="w-full md:w-1/2 space-y-4">
      <h1 className="font-bold text-5xl">
        Download our app to get most out of it
      </h1>
      <p className="text-[#706f7b]">
        Thrown shy denote ten ladies though ask saw. Or by to he going
        think order event music. Incommode so intention defective at
        convinced. Led income months itself and houses you.
      </p>
      <div className="flex gap-x-4 justify-center md:justify-normal">
        <div className="flex cursor-pointer items-center p-2 gap-x-4  lg:w-[42%]  rounded-2xl shadow-lg text-white bg-black ">
          <BsGooglePlay className="text-4xl" />
          <div>
            <h1>Get it on</h1>
            <p className="font-bold">Google Play</p>
          </div>
        </div>
        <div className="flex cursor-pointer  p-2 lg:gap-x-4 lg:w-[45%]  rounded-2xl shadow-lg text-white bg-black ">
          <BsApple className="text-4xl" />
          <div>
            <h1>Download on the</h1>
            <p className="font-bold">App Store</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
