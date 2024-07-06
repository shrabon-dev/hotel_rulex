import React from 'react'
import Navs from '../components/navs'
import Footer from '../components/footer'
import Single_Room_Hero from '../components/single_room'
import Product_Info from '../components/product_info'
import Related_Room from '../components/related_room'

export default function Single_room() {
  return (
    <>
      <Navs/>
      <Single_Room_Hero/>
      <Product_Info/>
      <Related_Room/>
      <Footer/>
    </>
  )
}
