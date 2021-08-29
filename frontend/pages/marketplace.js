import styles from '../styles/marketplace.module.css'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.js'
import { GiMagnifyingGlass } from "react-icons/gi"
import SortDropdown from '../components/SortDropdown'
import ProductItem from '../components/ProductItem'
import axiosInstance from "../axios/axiosInstance"
import _ from 'lodash'


const marketplace = () => {
  const [category, setCategory] = useState({
    id: 1,
    name: "Sort By..."
  })
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await axiosInstance.get("/api/product")
    setProducts(response.data.products)
    console.log(response.data.products)
  }
  const data = [
    {
      id: 1,
      name: "Price"
    },
    {
      id: 2,
      name: "Name"
    },
    {
      id: 3,
      name: "Date Added"
    },
    {
      id: 4,
      name: "Sales"
    }
  ]

  return (
    <div className={styles.background}>
      <Navbar />
      <div className="pt-10 min-h-screen">
        <div className={styles.header1container}>
          <div className="text-red-700 font-semibold text-6xl text-center w-full tracking-widest pb-1 ">
            MARKETPLACE
          </div>
          <div className="italic mt-2 text-grey-700 text-sm text-center w-full tracking-wide">
            "Why pay now when you can pay later"
          </div>
        </div>
        <div className="mx-96 bg-white flex items-center rounded-full shadow-lg px-3 space-x-3 py-2 my-10">
          <div className="pl-1">
            <GiMagnifyingGlass />
          </div>
          <input className="w-full focus:outline-none" placeholder="Find what you are looking for..." value={search} onChange={event => setSearch(event.target.value)} />
        </div>

        <div className="flex justify-between pb-7 pt-8 pl-32 pr-32">
          <div className="text-xl font-semibold">Featured</div>
          <div className="bg-white flex rounded-lg items-center">
            <SortDropdown data={data} selected={category} setSelected={setCategory} />
          </div>

        </div>

        <div className="grid gap-y-16 grid-cols-4 justify-items-center p-0.5 pl-20 pr-20 pb-30">
          {
            products && products.length !== 0
              ?
              _.filter(products, (product) => {
                return _.includes(product.name, search)
              }).map(product => {
                return <ProductItem key={product.id} id={product.id} name={product.name} image={product.image} company={product.Company.name} price={product.price} />
              })
              : <></>
          }
          {/* <ProductItem id={1} image="/photos/marketplace/flour.jpeg" name="Premium Flour" company="PonHockSG" price="S$ 10"
                    desc="At PonHockSG, we provide the best flour you can find in Singapore, in terms of product quality, rice texture and product sustainability."
                    bnpl="12" />
                <ProductItem id={2} image="/photos/marketplace/cups.jpeg" name="Ceramic Cups" company="Cupping" price="S$ 10" desc="Simple and minimalistic cup with a modern design. Whether dressing your table up or down, the simple, functional design is easy to coordinate with other shapes and colours." />
                <ProductItem id={3} image="/photos/marketplace/chair.jpeg" name="Modern Office Chair" company="ChairMan" price="S$ 250" desc="At ChairMan, we believe that there is a perfect chair for everyone. This classic black chair is suitable for offices, homes and even cafes." />
                <ProductItem id={4} image="/photos/marketplace/backpack.jpeg" name="Everyday Bag" company="BigBagCompany" price="S$ 45" desc="Everyday Bag to serve your everyday needs, now comes very nicely in new colour." />
                <ProductItem id={5} image="/photos/marketplace/handbag.jpeg" name="Estla hand bag" company="BigBagCompany" price="S$ 30" desc="An extremely functional bag to cater to all your needs. It is spacious enough for all your daily necessity, all while remaining fashionable." />
                <ProductItem id={6} image="/photos/marketplace/totebag.jpeg" name="Cowhide hand bag" company="ECCOwide" price="S$ 45" desc="For seekers of special textures, our unique cowhide hand bags for offer a different experience" />
                <ProductItem id={7} image="/photos/marketplace/bottle.jpeg" name="Memobottle" company="Bottles and bottles" price="$ 20" desc="This is a good bottle, in fact the best bottle" />
                <ProductItem id={8} image="/photos/marketplace/flask.jpeg" name="Vase" company="Plotting pots" price="S$ 15" desc="Sturdy and high quality housing of indoor or outdoor plant decors" /> */}
        </div>
        {
          _.filter(products, (product) => {
            return _.includes(product.name, search)
          }).length === 0 &&
          <div className="flex flex-col justify-center items-center">
            <img src="/marketplace/empty.png" className="h-40 opacity-80" />
            <div className="-ml-14 mt-10 flex justify-center items-center">No search matches. Try a different keyword!</div>
          </div>
        }
        {
          products && products.length === 0 &&
          <div className="flex flex-col justify-center items-center">
            <img src="/marketplace/empty.png" className="h-40 opacity-80" />
            <div className="-ml-14 mt-10 flex justify-center items-center">No items listed yet!</div>
          </div>
        }

        <div className="pt-32"></div>
      </div>
    </div>
  )
}

export default marketplace
