import React, { useEffect, useState } from 'react'
import styles from '../styles/listings.module.css'
import Navbar from '../components/Navbar.js'
import ListingItem from '../components/ListingItem'
import router from 'next/router'
import axiosInstance from '../axios/axiosInstance'
import { useAuth } from '../hooks/useAuth'


const Listing = () => {
    const [listings, setListings] = useState([])
    const { session, loading } = useAuth()

    const getListing = async () => {
        const response = await axiosInstance.get(`/api/listing/${session.uen}`)
        setListings(response.data.products)
    }

    useEffect(() => {
        getListing()
    }, [])

    return (
        <div className={styles.background}>
            <Navbar />
            <div className="pt-10"></div>
            <div className={styles.header1container}>
                <div className="text-red-700 font-semibold text-5xl text-center w-full tracking-widest pb-1 ">
                    MY LISTINGS
                </div>
                <div className="italic text-grey-700 text-sm text-center w-full tracking-wide pt-2">
                    "Sales is not about selling anymore, but about building trust and education" - Silva Devaki
                </div>
            </div>

            <div className="flex justify-between pb-7 pt-8 pl-32 pr-32">
                <div className="text-xl font-semibold tracking-wide">Current Listings</div>
                <div>
                    <div onClick={() => router.push("/upload")} className="container border bg-red-700 hover:bg-red-800 cursor-pointer rounded-lg py-2 px-5 text-white">Add Listing</div>
                </div>
            </div>

            <div className="grid gap-y-16 grid-cols-3 justify-items-center p-0.5 pl-20 pr-20 pb-30">
                {
                    listings && listings.length !== 0
                        ? listings.map(listing => {
                            return <ListingItem key={listing.id} id={listing.id} image={listing.image} company={listing.Company.name} name={listing.name} price={listing.price} desc={listing.description} bnpl={listing.instalment} />
                        })
                        : null
                }
                <ListingItem id={1} image="/photos/marketplace/backpack.jpeg" name="Everyday Bag" company="BigBagCompany" price="S$ 45" desc="Everyday Bag to serve your everyday needs, now comes very nicely in new colour." bnpl="12" />
                <ListingItem id={2} image="/photos/marketplace/handbag.jpeg" name="Estla hand bag" company="BigBagCompany" price="S$ 30" desc="An extremely functional bag to cater to all your needs. It is spacious enough for all your daily necessity, all while remaining fashionable." bnpl="12" />
                <ListingItem id={3} image="/photos/marketplace/totebag.jpeg" name="Cowhide hand bag" company="ECCOwide" price="S$ 45" desc="For seekers of special textures, our unique cowhide hand bags for offer a different experience" bnpl="6" />
            </div>
            <div className="pt-32"></div>
        </div>
    )
}

export default Listing
