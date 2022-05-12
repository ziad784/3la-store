import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ItemsFilter from '../components/ItemsFilter/ItemsFilter'
import ItemsGrid from '../components/ItemsGrid/ItemsGrid'
import Poster from '../components/Poster/Poster'
import women_img from '../../imgs/women.png';


function WomenCategory() {



  return (
    <div>
        <Header />
        <Poster bgco={"#EBEBEB"} subtitleco={"#FFA544"} title={"ملابس النساء"} subtitle={"أزياء رائعة للنساء"} pic={women_img} width={600} height={600} />
        <ItemsFilter />
        <ItemsGrid />
        <Footer />
      
    </div>
  )
}

export default WomenCategory