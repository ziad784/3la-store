import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ItemList from '../components/ItemList/ItemList'

function Profile() {




  return (
    <div>
        <Header />

        <div style={{width:"95%",marginTop:"7vh",margin:"auto"}} dir="rtl">
            <div style={{fontSize:"25px"}}>حسابي</div>

            <div className="flex profile_inputs_cont" style={{marginTop:"20px"}}>
                <div className="flex profile_inputs_cont" style={{gap:"50px",flex:1}}>
                    <div><img src="../imgs/profile.png" width={250} height={250} style={{borderRadius:"15px"}} /></div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",flex:.3}}>
                        <div style={{fontSize:"20px",color:"#FFA84D"}}>حلزوم ابراهيم</div>
                        <div className='input'>
                            <div>رقم الهاتف</div>
                            <input type="number" autoComplete='off' />
                        </div>
                        <div className='input'>
                            <div>المحافظة</div>
                            <input type="text" autoComplete='off' />
                        </div>
                    </div>
                </div>


                <div className='profile_orange_btn_cont' >
                    <div className="orange_btn" style={{width:"100%",padding:"5%",fontSize:"15px"}}>
                    حفظ التغير
                    </div>
                </div>

            </div>

            <div style={{marginTop:"10vh"}}>
                <div style={{fontSize:"25px"}}>طلباتي الاخيرة</div>

                <div className="flex profile_inputs_cont" style={{marginTop:"3vh",justifyContent:"space-between",gap:"30px",width:"100%"}}>

                    <div className="right" style={{backgroundColor:"#F2F1F1",flex:1,borderRadius:"15px",padding:"5%",height:"70vh",overflowY:"auto"}}>
                        <ItemList title={"اسم المنتج"} isdeleted={false} category={"ملابس النساء - تيشيرت"} pic={"../imgs/itemPic.png"} price={"10"} />
                        <ItemList title={"اسم المنتج"} isdeleted={false} category={"ملابس النساء - تيشيرت"} pic={"../imgs/itemPic.png"} price={"10"} />
                        <ItemList title={"اسم المنتج"} isdeleted={false} category={"ملابس النساء - تيشيرت"} pic={"../imgs/itemPic.png"} price={"10"} />
                        <ItemList title={"اسم المنتج"} isdeleted={false} category={"ملابس النساء - تيشيرت"} pic={"../imgs/itemPic.png"} price={"10"} />
                    </div>


                    <div className="left" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:"10px",flex:1,backgroundColor:"#F2F1F1",borderRadius:"15px",padding:"5%"}}>
                        <div><img src="../imgs/done.png" alt="done pic" /></div>
                        <div>تم الطلب بنجاح</div>
                        <div>2022-03-18</div>
                        <div>سيتم التوصيل بواسطة شركة</div>
                        <div> خلال 24 ساعة <span>FeedEX</span> </div>
                    </div>


                </div>

            </div>
        </div>


        <Footer />
    </div>
  )
}

export default Profile