import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../../components/Navbar.js'
import styles from '../../styles/marketplace.module.css'
import { AiOutlineArrowLeft } from "react-icons/ai";

const Listing = () => {
  const router = useRouter();
  const {name, company, price, image, desc, bnpl } = router.query

  return (
    <div className={styles.background}>
      <Navbar />
      <div className="flex justify-center pt-28">
        <div>
          <AiOutlineArrowLeft
            className="cursor-pointer w-6 h-6"
            onClick={() => router.back()}
          />
        </div>

        <img
          class="ml-10 flex justify-end object-contain"
          src={image}
          width="330"
          height="445"
        />

        <div className="pb-5 pl-20 pr-20" style={{ width: 600 }}>
          <div className={styles.companyName2}>{company}</div>
          <div className={styles.productName2}>{name}</div>
          <div className={styles.price2}>{price}</div>
          <div className="w-full mt-4 py-4 px-6 bg-white rounded-2xl shadow-md flex-col flex">
            <span style={{ color: "#D02626", fontSize: 12 }}>
              BNPL SCHEME:
            </span>
            <span style={{ color: "#D02626", fontSize: 12 }}>
              MONTHLY PAYMENT ACROSS {bnpl} MONTHS
            </span>
          </div>
          <div className={styles.detail}>{desc}</div>
          {/* <div className={styles.bnpl}>BNPL Scheme: {bnpl}</div> */}
          <div className="flex-row flex items-center ">
            <div className={styles.price2}>
              <span>Stock: </span>
            </div>
            {/* <div className=" ml-5 h-5 w-12 rounded border-2">
              <input className="flex w-full h-full text-center focus:outline-none" style={{ fontSize: 12 }} />
            </div> */}
          </div>

          <div onClick={() => { router.push({ pathname: "/editlisting/" , query: { name: name, company: company, price: price, image: image, desc: desc, bnpl: bnpl } }) }}
          className="w-28 h-10 mt-5 rounded-lg border text-center justify-center flex-col flex bg-black hover:bg-gray-700 cursor-pointer">
            <span className="text-white">EDIT</span>
          </div>
        </div>
      </div>
      <div className="pt-48" />
    </div>
  )
}

//onClick={() => { router.push({ pathname: "/listing/" + `${props.id}`, query: { name: props.name, company: props.company, price: props.price, image: props.image, desc: props.desc, bnpl: props.bnpl } }) 

export default Listing
