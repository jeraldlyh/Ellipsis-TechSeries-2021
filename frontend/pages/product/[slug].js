import { useRouter } from "next/router"
import React, { useState } from "react"
import Navbar from "../../components/Navbar"
import styles from "../../styles/marketplace.module.css"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useAuth } from "../../hooks/useAuth"


const Product = () => {
    const router = useRouter()
    const { name, company, price, image, desc, bnpl } = router.query
    const [quantity, setQuantity] = useState(0)
    const { session, loading } = useAuth()

    return (
        <div className={styles.background}>
            <Navbar />
            <div className="flex justify-center pt-28">
                <AiOutlineArrowLeft
                    className="cursor-pointer w-6 h-6"
                    onClick={() => router.back()}
                />

        <img
          class="ml-10 flex justify-end object-cover"
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
                            {bnpl} MONTHLY PAYMENT ACROSS 12 MONTHS
                        </span>
                    </div>
                    <div className={styles.detail}>{desc}</div>
                    {/* <div className={styles.bnpl}>BNPL Scheme: {bnpl}</div> */}
                    <div className="flex-row flex items-center ">
                        <div className={styles.price2}>
                            <span>Quantity: </span>
                        </div>
                        <div className=" ml-5 h-5 w-12 rounded border-2">
                            <input disabled={!session} className="flex w-full h-full text-center focus:outline-none" style={{ fontSize: 12 }} value={quantity} onChange={e => setQuantity(e.target.value)} />
                        </div>
                    </div>

          {
            session ?
              <Fragment>
                <div className="flex-row flex items-center ">
                  <div className={styles.price2}>
                    <span>Quantity: </span>
                  </div>
                  <div className=" ml-5 h-5 w-12 rounded border-2">
                    <input className="flex w-full h-full text-center focus:outline-none" style={{ fontSize: 12 }} />
                  </div>
                </div>
                <div className="w-40 h-10 mt-5 rounded-lg border text-center justify-center flex-col flex bg-black hover:bg-gray-700 cursor-pointer"
                  onClick={() => router.push("/cart")}>
                  <span className="text-white">ADD TO BAG</span>
                </div>
              </Fragment>
              :
              <Fragment>
                <div className="opacity-30 flex-row flex items-center ">
                  <div className={styles.price2}>
                    <span>Quantity: </span>
                  </div>
                  <div className=" ml-5 h-5 w-12 rounded border-2">
                    <input disabled className="flex w-full h-full text-center focus:outline-none" style={{ fontSize: 12 }} />
                  </div>
                </div>
                <div className="w-40 h-10 mt-5 rounded-lg border text-center justify-center flex-col flex bg-black hover:bg-gray-700 cursor-pointer"
                  onClick={() => router.push("/login")}>
                  <span className="text-white">LOGIN TO ADD</span>
                </div>
              </Fragment>
          }

        </div>
      </div>
      <div className="pt-48" />
    </div>
  )
}

export default Product
