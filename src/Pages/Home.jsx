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
        <Poster bgco={"#FFA340"} subtitleco={"white"} title={"اول متجر إلكتروني لبيع الملابس المستعملة عندك ملابس شنتات احذية الخ مو محتاجها الحل عنا هون"} subtitle={"قسم المحلات والملابس الجديدة"} pic={poster_img} width={270} height={400} />
        <Categories />
        <Items  title={"احدث المنتجات"}/>
        <SellingSection />
        <Footer />
    </div>
  )
}

export default Home