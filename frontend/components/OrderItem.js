import React from 'react'

const OrderItem = (props) => {
  return (
    <div className="grid grid-cols-9 text-gray-900 text-sm gap-y-2 pt-4 text-center border-b-2 pb-4 items-center">
      <div className="col-span-3 flex items-center">
        <img src="/profile/icon.png" className="rounded-full h-10 w-10" />
        <div className="justify-self-start ml-4">{props.name}</div>
      </div>
      <div className="col-span-2">{props.company}</div>
      <div className="col-span-2">{props.quantity}</div>
      <div className="col-span-2 flex items-center">
        <div className="rounded-full bg-black hover:bg-gray-700 text-white text-xs flex items-center px-2 py-1 cursor-pointer mr-2">ACCEPT</div>
        <div className="rounded-full border text-xs flex items-center px-2 py-1 cursor-pointer mr-2">REJECT</div>
      </div>
    </div>
  )
}

export default OrderItem