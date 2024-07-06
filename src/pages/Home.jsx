import React from 'react'
import Hero from '../components/hero'
import Navs from '../components/navs'
import Footer from '../components/footer'
import Newsletter from '../components/newsletter'
import FollowInsta from '../components/follow'
import Welcome from '../components/welcome'
import RoomAndSuits from '../components/rooms_suits'
import Services from '../components/services'
import Offers from '../components/offers'

export default function Home() {
  return (
    <>
    <Navs/>
    <Hero/>
    <Welcome/>
    <RoomAndSuits/>
    <Services/>
    <Offers/>
    <Newsletter/>
    <FollowInsta/>
    <Footer/>
    </>
  )
}
