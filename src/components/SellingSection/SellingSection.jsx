import React from 'react'
import './SellingSection.css'
import shopping_img from '../../../imgs/shoppingPic.png'


function SellingSection() {
  return (
    <div dir='rtl' style={{marginTop:"25vh",display:"flex"}} className="selling_section_cont">

        <div style={{flex:1}}>
        <div  className="right_selling_section" >
            <div className='orange_box' style={{width:"200px",height:"200px",backgroundColor:"#FFA340",borderRadius:"15px"}}></div>
            <img style={{position:"absolute",bottom:"0%"}} src={shopping_img} alt="shopping Pic" width={300} height={300} />
        </div>
        </div>

        <div style={{flex:3}} className="left_setion">
            <div style={{borderBottom:"5px solid #FFA340",width:"fit-content",fontSize:"20px",paddingBottom:"5px"}}>عندك ملابس  زياده مو محتاجها ؟ </div>

            <div  style={{marginTop:"20px"}}>
            اذا كان عندك ملابس ما بتحاجها بإمكانك تبيعها عبر منصتنا لتربح منها<br /> كثير ونساعدك بتوصيلها وين ما كان طلبك 
            </div>

            <div className="black_btn" style={{marginTop:"20px"}}>
            ابدا البيع 
            </div>

        </div>

    </div>
  )
}

export default SellingSection