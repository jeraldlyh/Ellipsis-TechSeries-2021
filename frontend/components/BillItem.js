import React from 'react'

const BillItem = () => {
  return (
    <div className="grid grid-cols-9 text-gray-900 text-sm gap-y-2 pt-4 text-center border-b-2 pb-4 items-center">
      <div className="col-span-3 flex items-center">
        <img src="/profile/icon.png" className="h-10 w-10" />
        <div className="justify-self-start ml-4">Arabica Coffee Beans</div>
      </div>
      <div className="col-span-2">Daily Slip</div>
      <div className="col-span-2">10</div>
      <div className="col-span-2 flex items-center">
        <div className="rounded-full bg-gray-500 hover:bg-gray-600 text-white text-xs flex items-center px-3 py-1 cursor-pointer mr-2">ACCEPT</div>
        <div className="rounded-full border text-xs flex items-center px-3 py-1 cursor-pointer mr-2">REJECT</div>
      </div>
    </div>
  )
}

export default BillItem