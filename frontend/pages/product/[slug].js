import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../../components/Navbar.js'
import styles from '../../styles/marketplace.module.css'

const Product = () => {
  const router = useRouter();
  const { id, name, company, price, image } = router.query

  return (
    <div className={styles.background}>
      <Navbar></Navbar>
      <div className="flex justify-center">
        <img class="ml-64 flex justify-end" src={image} width="330" height="445" />

        <div className="pb-5 p-20 pr-20">
          <div className={styles.companyName2}>{company}</div>
          <div className={styles.productName2}>{name}</div>
          <div className={styles.price2}>{price}</div>

          <div className={styles.detail}>At PonHockSG, we provide the best flour you can find in Singapore, in terms of product quality, rice texture and product sustainability.</div>
          <div className={styles.price2}>Quantity: </div>
        </div>
      </div>
    </div>
  )
}

export default Product
