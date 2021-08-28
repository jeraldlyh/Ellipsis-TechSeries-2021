import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar.js";
import styles from "../../styles/marketplace.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Product = () => {
    const router = useRouter();
    const { id, name, company, price, image, desc, bnpl } = router.query;

    return (
        <div className={styles.background}>
            <Navbar></Navbar>
            <div className="flex justify-center pt-32">
                <div>
                    <AiOutlineArrowLeft
                        className="cursor-pointer w-6 h-6"
                        onClick={() => router.back()}
                    />
                </div>

                <img
                    class="ml-10 flex justify-end object-cover"
                    src={image}
                    width="330"
                    height="445"
                />

                <div className="pb-5 p-20 pr-20" style= {{width:600}}>
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
                    <div className = "flex-row flex items-center ">
                        <div className={styles.price2}>
                            <span>Quantity: </span>
                        </div>
                        <div className=" ml-5 h-5 w-12 rounded border-2">
                            <input className = "flex w-full h-full text-center focus:outline-none" style = {{fontSize:12}} />
                        </div>
                    </div>

                    <div className = "w-40 h-10 mt-5 rounded border text-center justify-center flex-col flex bg-black hover:bg-gray-700 cursor-pointer">
                        <span className = "text-white">ADD TO BAG</span>
                    </div>
                </div>
            </div>
            <div className="pt-48" />
        </div>
    );
};

export default Product;
