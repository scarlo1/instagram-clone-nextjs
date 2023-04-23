import React from 'react'

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <img className="h-16 rounded-full border p-[2px]" src="https://yt3.googleusercontent.com/ytc/AL5GRJXhi1mm69MuHnk_n8-46VEFrMU8SelQCT3-Vv5H2A=s900-c-k-c0x00ffffff-no-rj" alt="user image" />
        <div className="flex-1 ml-4">
            <h2 className="font-bold">codewithsahand</h2>
            <h3 className="text-sm text-gray-400">welcome to instagram</h3>
        </div>
        <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  )
}
