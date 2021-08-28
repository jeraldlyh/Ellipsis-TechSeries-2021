import React from 'react'
import styles from '../styles/listings.module.css'
import Navbar from '../components/Navbar.js'
import ListingItem from '../components/ListingItem'

const listings = () => {
    return (
        <div className={styles.background}>
            <Navbar />
            <div className="pt-10"></div>
            <div className={styles.header1container}>
                <div className="text-red-700 font-semibold text-6xl text-center w-full tracking-widest pb-1 ">
                    MY LISTINGS
                </div>
                <div className="text-grey-700 text-sm text-center w-full tracking-wide pt-2">
                    "Sales is not about selling anymore, but about building trust and education" - Silva Devaki
                </div>
            </div>

            <div className="flex justify-between pb-7 pt-8 pl-32 pr-32">
                <div className="text-xl font-semibold tracking-wide">Current Listings</div>
                <div>
                    <div className="container border bg-red-700 rounded-xl py-2 px-5 text-white">Add Listing</div>
                </div>
            </div>

            <div className="grid gap-y-16 grid-cols-3 justify-items-center p-0.5 pl-20 pr-20 pb-30">
                <ListingItem id={1} image="/photos/marketplace/backpack.jpeg" name="Everyday Bag" company="BigBagCompany" price="S$ 45" desc="Everyday Bag to serve your everyday needs, now comes very nicely in new colour." bnpl= "monthly payment across 12 months"/>
                <ListingItem id={2} image="/photos/marketplace/handbag.jpeg" name="Estla hand bag" company="BigBagCompany" price="S$ 30" desc="An extremely functional bag to cater to all your needs. It is spacious enough for all your daily necessity, all while remaining fashionable." bnpl= "monthly payment across 12 months"/>
                <ListingItem id={3} image="/photos/marketplace/totebag.jpeg" name="Cowhide hand bag" company="ECCOwide" price="S$ 45" desc="For seekers of special textures, our unique cowhide hand bags for offer a different experience" bnpl= "monthly payment across 6 months"/>
            </div>
            <div className="pt-32"></div>
        </div>
    )
}

export default listings
