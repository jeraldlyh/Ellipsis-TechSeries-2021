import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../../components/Navbar.js'
import styles from '../../styles/marketplace.module.css'
import { AiOutlineArrowLeft } from "react-icons/ai"

const Product = () => {
    const router = useRouter();
    const { id, name, company, price, image, desc, bnpl } = router.query

    return (
        <div className={styles.background}>
            <Navbar></Navbar>
            <div className="flex justify-center pt-32">
                <div class="ml-64" >
                    <AiOutlineArrowLeft className="cursor-pointer w-6 h-6" onClick={() => router.back()}/>
                </div>

                <img class="ml-10 flex justify-end object-cover" src={image} width="330" height="445" />

                <div className="pb-5 p-20 pr-20">
                    <div className={styles.companyName2}>{company}</div>
                    <div className={styles.productName2}>{name}</div>
                    <div className={styles.price2}>{price}</div>
                    <div className={styles.detail}>{desc}</div>
                    <div className={styles.bnpl}>BNPL Scheme: {bnpl}</div>
                    <div className={styles.price2}>Quantity: </div>
                </div>
            </div>
            <div className="pt-48" />

        </div>
    )
}

export default Product
