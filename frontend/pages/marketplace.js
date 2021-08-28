import styles from '../styles/marketplace.module.css'
import React from 'react'
import Navbar from '../components/Navbar.js'
// import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/solid'

const marketplace = () => {
    return (
        <div className={styles.background}>
            <Navbar></Navbar>
            <div className="pt-10"></div>
            <div className={styles.header1container}>
                <div className={styles.header1}>
                    Marketplace
                </div>
                <div className={styles.subheader}>
                    "why pay now when you can pay later"
                </div>
            </div>

            <div className="pt-5 pb-7 relative mx-auto text-gray-600 flex justify-center pb-20">
                <input className="border-0 bg-white h-10 w-full mx-96 px-10 pr-16 shadow-lg rounded-full text-sm focus:outline-none" 
                placeholder="Find what you are looking for..."></input>
                <button></button>
            </div>

            <div className="grid grid-cols-2 pb-7 pt-8 pl-32 pr-32">
                <div className="text-lg">Featured</div>
                <div>
                    <div className="text-sm text-right">Sort By: </div>
                    
                </div>
                
            </div>

            <div className="grid gap-y-16 grid-cols-4 justify-items-center p-0.5 pl-20 pr-20 pb-30">
                <div>
                    <img className="pb-5" src="/photos/marketplace/flour.jpeg" width="240" height="330"/>
                    <div className={styles.productName}>Premium Flour</div>
                    <div className={styles.companyName}>PonHockSG</div>
                    <div className={styles.price}>S$ 10 / 100kg</div>
                </div>

                <div>
                    <img className="pb-5" src="/photos/marketplace/cups.jpeg" width="240" height="330"/>
                    <div className={styles.productName}>Ceramic Cups</div>
                    <div className={styles.companyName}>Cupping</div>
                    <div className={styles.price}>S$ 10 / pc</div>
                </div>

                <div>
                    <img className="pb-5" src="/photos/marketplace/chair.jpeg" width="240" height="330"/>
                    <div className={styles.productName}>Modern Office Chair</div>
                    <div className={styles.companyName}>ChairMan</div>
                    <div className={styles.price}>S$ 250 / pc</div>
                </div>

                <div>
                    <img className="pb-5" src="/photos/marketplace/backpack.jpeg" width="240" height="330"/>
                    <div className={styles.productName}>Everyday Bag</div>
                    <div className={styles.companyName}>BigBagCompany</div>
                    <div className={styles.price}>S$ 45 / pc</div>
                </div>

                <div>
                    <img className="pb-5" src="/photos/marketplace/handbag.jpeg" width="240" height="330"/>
                    <div className={styles.productName}>Estla hand bag</div>
                    <div className={styles.companyName}>BigBagCompany</div>
                    <div className={styles.price}>S$ 30 / pc</div>
                </div>

                <div>
                    <img className="pb-5" src="/photos/marketplace/totebag.jpeg" width="240" height="330"/>
                    <div className={styles.productName}>Cowhide hand bag</div>
                    <div className={styles.companyName}>ECCOwide</div>
                    <div className={styles.price}>S$ 45 / pc</div>
                </div>

                <div>
                    <img className="pb-5" src="/photos/marketplace/bottle.jpeg" width="240" height="330"/>
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
