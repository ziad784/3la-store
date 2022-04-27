import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {HiOutlineHeart} from 'react-icons/hi'
import Items from '../components/Items/Items'

function Item() {
  return (
    <div>
        <Header />

        <div className="flex Item_cont" dir='rtl' style={{margin:"30px",gap:"50px"}}>
            <div className="left">

                <div><img src="./imgs/itemPic.png" alt="" /></div>

                <div className="flex" style={{gap:"5px",marginTop:"2vh"}}>
                    <div><img src="./imgs/itemPic.png" alt="" width={80} height={80} /></div>
                    <div><img src="./imgs/itemPic.png" alt="" width={80} height={80} /></div>
                    <div><img src="./imgs/itemPic.png" alt="" width={80} height={80} /></div>
                    <div><img src="./imgs/itemPic.png" alt="" width={80} height={80} /></div>
                </div>
            </div>


            <div className="right">
                <div style={{fontSize:"25px"}}>اسم المنتج <span style={{color:"#FFA84D"}}>10</span> د.ا</div>
                <div className="flex" style={{gap:"10px",marginTop:"10px"}}>
                    <div>قسم</div>
                    <div style={{color:"#FFA84D"}}>الملابس - تيشيرت</div>
                </div>

                <div style={{marginTop:"5vh"}} className="item_desc">
                هذا مثال على وصف يمكن استبداله بشي اخر  هذا مثال على وصف يمكن استبداله بشي اخرهذا مثال على وصف يمكن استبداله بشي اخر
                </div>


                <div className="orange_btn" style={{marginTop:"10vh",padding:"7px"}}>
                اضف الى السلة
                </div>

                <div className="flex" style={{alignItems:"center",gap:"20px",marginTop:"2vh"}}>
                    <div style={{cursor:"pointer"}}><HiOutlineHeart size={25}/></div>
               
                </div>


            </div>
        </div>

        <div style={{display:"flex",justifyContent:"center"}}>
            <div>هذا مثال على وصف يمكن استبداله بشي اخر  هذا مثال على وصف يمكن استبداله بشي اخرهذا مثال على وصف يمكن استبداله بشي اخر</div>
        </div>

        <Items title={"منتجات ذات صله "} />

        <Footer />

        

    </div>
  )
}

export default Item