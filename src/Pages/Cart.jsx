import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ItemList from '../components/ItemList/ItemList'
import aramax_img from '../../imgs/aramax.png'
import fedex_img from '../../imgs/fedex.png'
import DPD_img from '../../imgs/DPD.png'
import item_img from '../../imgs/itemPic.png';

function Cart() {
  return (
    <div>
        <Header />

        <div style={{width:"95%",marginTop:"7vh",margin:"auto"}} dir="rtl">
            <div style={{fontSize:"25px"}}>سلة المشتريات</div>

            <div className="flex cart_cont" style={{marginTop:"3vh",justifyContent:"space-between",gap:"30px"}}>

                <div className="right" style={{backgroundColor:"#F2F1F1",flex:1,borderRadius:"15px",padding:"5%",height:"70vh",overflowY:"auto"}}>
                    <ItemList title={"اسم المنتج"} isdeleted={true} category={"ملابس النساء - تيشيرت"} pic={item_img} price={"10"} />
                    <ItemList title={"اسم المنتج"} isdeleted={true} category={"ملابس النساء - تيشيرت"} pic={item_img} price={"10"} />
                    <ItemList title={"اسم المنتج"} isdeleted={true} category={"ملابس النساء - تيشيرت"} pic={item_img} price={"10"} />
                    <ItemList title={"اسم المنتج"} isdeleted={true} category={"ملابس النساء - تيشيرت"} pic={item_img} price={"10"} />
                </div>


                <div className="left" style={{backgroundColor:"#F2F1F1",flex:1,borderRadius:"15px",padding:"5%",height:"70vh"}}>


                   
                        <div className="flex" style={{justifyContent:"center"}}>
                            <div>رقم الطلب</div>
                            <div style={{color:"#FFA84D"}}>#1111111</div>
                        </div>


                        <div className="flex" style={{justifyContent:"space-around",marginTop:"20px"}}>
                            <div>اجمالي المنتجات</div>
                            <div style={{fontSize:"20px",color:"#FFA84D"}}>30 د.ا</div>
                        </div>

                        <div className="flex" style={{justifyContent:"space-around",marginTop:"20px"}}>
                            <div>قيمة التوصيل</div>
                            <div style={{fontSize:"20px",color:"#FFA84D"}}>5 د.ا</div>
                        </div>

                        <div className="flex" style={{justifyContent:"space-around",marginTop:"20px"}}>
                            <div>المجموع</div>
                            <div style={{fontSize:"20px",color:"#FFA84D"}}>35 د.ا</div>
                        </div>

                        <div style={{marginTop:"20px"}}>
                            <div style={{width:"80%",margin:"auto",marginTop:"20px",textAlign:"center"}}>
                            سيتم شحن طلبك من شركة التوصيل وتوصيلها الى منزلك 
    في محافظة <span style={{color:"#FFA84D"}}>عمان</span> خلال 24 ساعة    
                            </div>
                        </div>


                        <div style={{display:"flex",justifyContent:"center",marginTop:"3vh"}}>
                            <div className="orange_btn" style={{padding:"10px",width:"80%"}}>
                            تأكيد الطلب الان
                            </div>
                        </div>

                    

                </div>


            </div>

            <div style={{fontSize:"25px",marginTop:"5vh"}}>اختيار شركة التوصيل</div>

            <div className="flex shop_cart_cont" >
                
                <div className="shop_cart flex" style={{alignItems:"center",gap:"20px",boxShadow:"black 1.95px 1.95px 2.6px;"}}>
                    <div><img src={fedex_img} width={120} height={70} alt="FedEx logo" /></div>
                    <div>
                        <div>رسوم التوصيل</div>
                        <div style={{color:"#FFA84D"}}>3 د.ا</div>
                    </div>
                </div>
                
                <div className="shop_cart flex" style={{alignItems:"center",gap:"20px",boxShadow:"black 1.95px 1.95px 2.6px;"}}>
                    <div><img src={aramax_img} width={120} height={120} alt="FedEx logo" /></div>
                    <div>
                        <div>رسوم التوصيل</div>
                        <div style={{color:"#FFA84D"}}>3 د.ا</div>
                    </div>
                </div>
                
                <div className="shop_cart flex" style={{alignItems:"center",gap:"20px",boxShadow:"black 1.95px 1.95px 2.6px;"}}>
                    <div><img src={DPD_img} width={130} height={70} alt="FedEx logo" /></div>
                    <div>
                        <div>رسوم التوصيل</div>
                        <div style={{color:"#FFA84D"}}>3 د.ا</div>
                    </div>
                </div>


            </div>


        </div>


        <Footer />


    </div>
  )
}

export default Cart