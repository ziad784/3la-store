import React from 'react'
import './CategoryCard.css'


function CategoryCard({title,subtitle,pic}) {
  return (
    <div className="card_cont">
        <div className="card_left">
            <div style={{textAlign:"right"}}>
               <div>{title}</div>
               <div style={{color:"#FFA544"}} className="card_subtitle">{subtitle}</div>
            </div>
            <div className="black_btn" style={{fontSize:"17px",padding:"10px"}}>
             تصفح العروض 
            </div>

        </div>

        <div className="card_right">
            <div><img src={pic} alt="poster img" /></div>
        </div>
    </div>
  )
}

export default CategoryCard