import React from 'react'
import ItemsCard from '../ItemsCard/ItemsCard'
import './Items.css'



function Items({title}) {
  return (
<div dir='rtl' style={{marginTop:"10vh"}}>
        <h2 style={{marginRight:"20px"}}>{title}</h2>

        <div className="Items_grid" style={{marginTop:"20px"}}>
            <ItemsCard name={"اسم المنتج"} pic={"./imgs/itemPic.png"} price={"5"} />
            <ItemsCard name={"اسم المنتج"} pic={"./imgs/itemPic.png"} price={"5"} />
            <ItemsCard name={"اسم المنتج"} pic={"./imgs/itemPic.png"} price={"5"} />
            <ItemsCard name={"اسم المنتج"} pic={"./imgs/itemPic.png"} price={"5"} />
        </div>
        
    </div>
  )
}

export default Items