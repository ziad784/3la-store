import React from 'react'
import ItemsCard from '../ItemsCard/ItemsCard'
import './ItemsGrid.css'

function ItemsGrid() {
  return (
    <div>
        <div className="item_grid">
            <ItemsCard name={"اسم المنتج"} pic={"../imgs/itemPic.png"} price={"5"} />
            <ItemsCard name={"اسم المنتج"} pic={"../imgs/itemPic.png"} price={"5"} />
            <ItemsCard name={"اسم المنتج"} pic={"../imgs/itemPic.png"} price={"5"} />
            <ItemsCard name={"اسم المنتج"} pic={"../imgs/itemPic.png"} price={"5"} />
            <ItemsCard name={"اسم المنتج"} pic={"../imgs/itemPic.png"} price={"5"} />
            <ItemsCard name={"اسم المنتج"} pic={"../imgs/itemPic.png"} price={"5"} />
            <ItemsCard name={"اسم المنتج"} pic={"../imgs/itemPic.png"} price={"5"} />
            <ItemsCard name={"اسم المنتج"} pic={"../imgs/itemPic.png"} price={"5"} />
            <ItemsCard name={"اسم المنتج"} pic={"../imgs/itemPic.png"} price={"5"} />
            <ItemsCard name={"اسم المنتج"} pic={"../imgs/itemPic.png"} price={"5"} />
        </div>

        <div style={{display:"flex",justifyContent:"center",marginTop:"5vh"}}>
            <div className="black_btn">عرض المزيد</div>
        </div>

    </div>
  )
}

export default ItemsGrid