import styles from '../styles/marketplace.module.css'
import React, { useState } from 'react'
import Navbar from '../components/Navbar.js'
import { GiMagnifyingGlass } from "react-icons/gi"
import SortDropdown from '../components/SortDropdown'
import router from 'next/router'

const marketplace = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

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
        <div className="cursor-pointer" onClick={() => { router.push("/product/" + 'name')}}>
          <img className="pb-5" src="/photos/marketplace/flour.jpeg" width="240" height="330" />
          <div className={styles.productName}>Premium Flour</div>
          <div className={styles.companyName}>PonHockSG</div>
          <div className={styles.price}>S$ 10 / 100kg</div>
        </div>

        <div>
          <img className="pb-5" src="/photos/marketplace/cups.jpeg" width="240" height="330" />
          <div className={styles.productName}>Ceramic Cups</div>
          <div className={styles.companyName}>Cupping</div>
          <div className={styles.price}>S$ 10 / pc</div>
        </div>

        <div>
          <img className="pb-5" src="/photos/marketplace/chair.jpeg" width="240" height="330" />
          <div className={styles.productName}>Modern Office Chair</div>
          <div className={styles.companyName}>ChairMan</div>
          <div className={styles.price}>S$ 250 / pc</div>
        </div>

        <div>
          <img className="pb-5" src="/photos/marketplace/backpack.jpeg" width="240" height="330" />
          <div className={styles.productName}>Everyday Bag</div>
          <div className={styles.companyName}>BigBagCompany</div>
          <div className={styles.price}>S$ 45 / pc</div>
        </div>

        <div>
          <img className="pb-5" src="/photos/marketplace/handbag.jpeg" width="240" height="330" />
          <div className={styles.productName}>Estla hand bag</div>
          <div className={styles.companyName}>BigBagCompany</div>
          <div className={styles.price}>S$ 30 / pc</div>
        </div>

        <div>
          <img className="pb-5" src="/photos/marketplace/totebag.jpeg" width="240" height="330" />
          <div className={styles.productName}>Cowhide hand bag</div>
          <div className={styles.companyName}>ECCOwide</div>
          <div className={styles.price}>S$ 45 / pc</div>
        </div>

        <div>
          <img className="pb-5" src="/photos/marketplace/bottle.jpeg" width="240" height="330" />
          <div className={styles.productName}>Memobottle</div>
          <div className={styles.companyName}>Bottles and bottles</div>
          <div className={styles.price}>S$ 20 / pc</div>
        </div>

        <div>
          <img className="pb-5" src="/photos/marketplace/flask.jpeg" width="240" height="330" />
          <div className={styles.productName}>Vase</div>
          <div className={styles.companyName}>Plotting pots</div>
          <div className={styles.price}>S$ 15 / pc</div>
        </div>

      </div>
      <div className="pt-32"></div>
    </div>
  )
}

export default marketplace
