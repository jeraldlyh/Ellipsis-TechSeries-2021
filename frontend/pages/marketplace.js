import styles from '../styles/marketplace.module.css'
import React, { useState } from 'react'
import Navbar from '../components/Navbar.js'
import { GiMagnifyingGlass } from "react-icons/gi"
import SortDropdown from '../components/SortDropdown'
import ProductItem from '../components/ProductItem'

const marketplace = () => {
  const [category, setCategory] = useState({
    id: 1,
    name: "Sort By..."
  })
  const data = [
    {
      id: 1,
      name: "Price"
    },
    {
      id: 2,
      name: "Poo"
    },
    {
      id: 3,
      name: "Peepee"
    },
    {
      id: 4,
      name: "Monkey"
    }
  ]

  return (
    <div className={styles.background}>
      <Navbar />
      <div className="pt-10"></div>
      <div className={styles.header1container}>
        <div className="text-red-700 font-semibold text-6xl text-center w-full tracking-widest pb-1 ">
          MARKETPLACE
        </div>
        <div className="text-grey-700 text-sm text-center w-full tracking-wide">
          "why pay now when you can pay later"
        </div>
      </div>
      <div className="mx-96 bg-white flex items-center rounded-full shadow-lg px-3 space-x-3 py-2 my-10">
        <div className="pl-1">
          <GiMagnifyingGlass />
        </div>
        <input className="w-full focus:outline-none" placeholder="Find what you are looking for..." />
      </div>

      <div className="flex justify-between pb-7 pt-8 pl-32 pr-32">
        <div className="text-xl font-semibold">Featured</div>
        <div>
          <SortDropdown data={data} selected={category} setSelected={setCategory} />
        </div>

      </div>

      <div className="grid gap-y-16 grid-cols-4 justify-items-center p-0.5 pl-20 pr-20 pb-30">
        <ProductItem id={1} image="/photos/marketplace/flour.jpeg" name="Premium Flour" company="PonHockSG" price="S$ 10" />
        <ProductItem id={2} image="/photos/marketplace/cups.jpeg" name="Ceramic Cups" company="Cupping" price="S$ 10" />
        <ProductItem id={3} image="/photos/marketplace/chair.jpeg" name="Modern Office Chair" company="ChairMan" price="S$ 250" />
        <ProductItem id={4} image="/photos/marketplace/backpack.jpeg" name="Everyday Bag" company="BigBagCompany" price="S$ 45" />
        <ProductItem id={5} image="/photos/marketplace/handbag.jpeg" name="Estla hand bag" company="BigBagCompany" price="S$ 30" />
        <ProductItem id={6} image="/photos/marketplace/totebag.jpeg" name="Cowhide hand bag" company="ECCOwide" price="S$ 45" />
        <ProductItem id={7} image="/photos/marketplace/bottle.jpeg" name="Memobottle" company="Bottles and bottles" price="$ 20" />
        <ProductItem id={8} image="/photos/marketplace/flask.jpeg" name="Vase" company="Plotting pots" price="S$ 15" />
      </div>
      <div className="pt-32"></div>
    </div>
  )
}

export default marketplace
