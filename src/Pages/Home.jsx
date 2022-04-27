import React from 'react'
import Categories from '../components/Categories/Categories'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Items from '../components/Items/Items'
import Poster from '../components/Poster/Poster'
import SellingSection from '../components/SellingSection/SellingSection'
import poster_img from '../../imgs/poster.png'

function Home() {
  return (
    <div>
        <Header />
        <Poster bgco={"#FFA340"} subtitleco={"white"} title={"احصل على افضل ملابس البراندات"} subtitle={"بسعر مناسب "} pic={poster_img} />
        <Categories />
        <Items  title={"احدث المنتجات"}/>
        <SellingSection />
        <Footer />
    </div>
  )
}

export default Home