import React from 'react'

const BillItem = (props) => {
  return (
    <div className="grid grid-cols-2 text-gray-900 text-sm gap-y-2 pt-4 border-b-2 pb-4 items-center">
      <div className="col-span-1 flex items-center">
        <img src={props.image} className="rounded-full h-10 w-10" />
        <div className="ml-5">
          <div>{props.name}</div>
          <div className="text-xs font-light">{props.company}</div>
        </div>
      </div>
      <div className="col-span-1 relative flex flex-col pt-3 justify-center">
        <div className="flex">
          <div className="rounded-full bg-gray-200 w-full text-xs flex items-center px-3 py-1 mr-2" />
          <div style={{ width: `${props.current / props.total * 100}%` }} className="absolute rounded-full w-20 bg-red-700 text-xs flex items-center px-3 py-1 mr-2" />
        </div>
        <div className="text-red-700 mt-1 text-xxs">{props.current}/{props.total} INSTALMENTS TO GO</div>
      </div>
    </div>
  )
}

export default BillItem