import React from 'react'
import {ImCross} from 'react-icons/im';

function ItemList({isdeleted,title,category,price,pic}) {
  return (
    <div dir='rtl' style={{display:'flex',gap:"30px",marginTop:"5vh"}}>

        <div style={{position:"relative"}}>
            {isdeleted?<div style={{position:"absolute",right:"0",top:"-10%",backgroundColor:"#FF4D4D",color:"white",borderRadius:"50%",width:"25px",height:"25px",display:"flex",justifyContent:"center",alignItems:"center"}}><ImCross size={13} /></div>:<div></div>}
            <img src={pic} alt="" width={150} height={150} style={{objectFit:"cover"}} />
        </div>

        <div>
            <div>{title}</div>
            <div className="flex" style={{gap:"30px",marginTop:"10px"}}>
                <div>قسم</div>
                <div style={{color:"#FFA84D"}}>{category}</div>
            </div>
            <div className="flex" style={{gap:"10px",marginTop:"10px"}}>
                <div>السعر</div>
                <div style={{color:"#FFA84D"}}>{price} د.ا</div>
            </div>
        </div>
        
    </div>
  )
}

export default ItemList