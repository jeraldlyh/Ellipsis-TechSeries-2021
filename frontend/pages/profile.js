import React from 'react'
import Navbar from '../components/Navbar.js'
import OrderItem from '../components/OrderItem.js'
import BillItem from '../components/BillItem.js'

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-10 bg-gray-100 min-h-screen">
        <div className="text-red-700 font-semibold text-5xl text-center w-full tracking-widest pb-12">
          MY PROFILE
        </div>
        <div className="grid grid-cols-5 gap-x-20 mx-20">
          <div className="flex flex-col items-center col-span-2 bg-white rounded-3xl shadow-md w-full pt-8 pb-5 mb-16">
            <img src="/profile/profile.png" className="rounded-full flex flex-none h-60 w-60 mt-10" />
            <div className="text-red-700 text-lg font-semibold tracking-wider mt-4">SURF COFFEE</div>
            <div className="px-20 w-full py-0">
              <div className="flex justify-between pb-4 border-b mt-8">
                <div className="text-gray-600 text-base font-semibold tracking-wider">CREDIT RATING</div>
                <div className="text-gray-600 text-base font-semibold">A</div>
              </div>
              <div className="flex justify-between pb-4 border-b mt-4">
                <div className="text-gray-600 text-base font-semibold tracking-wider">EMAIL</div>
                <div className="text-gray-600 text-base font-semibold">surf.coffee@gmail.com</div>
              </div>
              <div className="flex justify-between pb-4 border-b mt-4">
                <div className="text-gray-600 text-base font-semibold tracking-wider">PHONE NO.</div>
                <div className="text-gray-600 text-base font-semibold">+65 9987 6234</div>
              </div>
              <div className="cursor-pointer hover:bg-gray-700 mt-20 flex justify-center py-2 rounded-2xl bg-gray-600 text-white">
                VIEW MY LISTINGS
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="bg-white rounded-3xl shadow-md w-full h-96 overflow-y-scroll mb-16 px-12 py-6">
              <div className="text-red-700 text-lg font-semibold tracking-wider">ORDER REQUESTS</div>
              <div className="grid grid-cols-9 text-gray-500 text-sm items-end gap-y-2 pt-4 text-center border-b-2 pb-2">
                <div className="col-span-3 justify-self-start">PRODUCT</div>
                <div className="col-span-2">REQUESTING COMPANY</div>
                <div className="col-span-2">QUANTITY</div>
                <div className="col-span-2"></div>
              </div>
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
            </div>
            <div className="bg-white rounded-3xl shadow-md w-full h-96 overflow-y-scroll mb-16 px-12 py-6">
              <div className="text-red-700 text-lg font-semibold tracking-wider border-b-2 pb-4">OUTSTANDING BILLS</div>
              <BillItem image="/profile/item1.png" name="Premium Flour" company="PonHockSG" current={5} total={13} />
              <BillItem image="/profile/item1.png" name="Premium Flour" company="PonHockSG" current={6} total={13} />
              <BillItem image="/profile/item1.png" name="Premium Flour" company="PonHockSG" current={7} total={9} />
              <BillItem image="/profile/item1.png" name="Premium Flour" company="PonHockSG" current={2} total={13} />
              <BillItem image="/profile/item1.png" name="Premium Flour" company="PonHockSG" current={3} total={11} />
              <BillItem image="/profile/item1.png" name="Premium Flour" company="PonHockSG" current={2} total={3} />
              <BillItem image="/profile/item1.png" name="Premium Flour" company="PonHockSG" current={5} total={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
