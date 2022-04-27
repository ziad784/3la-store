import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ItemsFilter from '../components/ItemsFilter/ItemsFilter'
import ItemsGrid from '../components/ItemsGrid/ItemsGrid'
import Poster from '../components/Poster/Poster'


function WomenCategory() {



  return (
    <div>
        <Header />
        <Poster bgco={"#EBEBEB"} subtitleco={"#FFA544"} title={"ملابس النساء"} subtitle={"أزياء رائعة للنساء"} pic={"../imgs/women.png"} width={600} height={600} />
        <ItemsFilter />
        <ItemsGrid />
        <Footer />
      
    </div>
  )
}

export default WomenCategory