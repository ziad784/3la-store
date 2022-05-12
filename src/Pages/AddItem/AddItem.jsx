import React from 'react'
import Header from '../../components/Header/Header'
import './AddItem.css'
import add_img from '../../../imgs/add.png';

function AddItem() {
  return (
    <div >
        <Header />

        <div dir='rtl' style={{margin:"30px"}}>
            <div  style={{fontSize:"25px"}}>إضافة اعلان</div>

            <div className="flex add_cont">

                <div className="add_form" style={{flex:2}}>

                    <div className="flex input_flex">
                        <div className='add_input'>
                            <div>القسم</div>
                            <select >
                                
                                <option value="الملابس">الملابس</option>
                                <option value="الملابس">الملابس</option>
                                <option value="الملابس">الملابس</option>
                                
                            </select>

                        </div>

                        <div className='add_input'>
                            <div>التصنيف</div>
                            <select >
                            
                                <option value="تيشيرت">تيشيرت  </option>
                                <option value="تيشيرت">تيشيرت  </option>
                                <option value="تيشيرت">تيشيرت  </option>
                                
                            </select>

                        </div>


                    </div>

                    <div className="flex input_flex">
                        <div className='add_input'>
                            <div>عنوان</div>
                            <input type="text" autoComplete='off' />

                        </div>

                        <div className='add_input flex' style={{alignItems:"center",gap:"5px"}}>
                            <div>السعر</div>
                            <input style={{width:"50%"}} type="number" autoComplete='off' />
                            <div>د.ا</div>

                        </div>


                    </div>


                    <div style={{margin:"50px",marginRight:"50px"}}>
                        <div>الوصف</div>
                        <textarea name="" id="" cols="30" rows="7" style={{width:"80%",resize:"none",marginTop:"5px"}}>

                        </textarea>
                    </div>

                    <div className='add_input' style={{marginRight:"50px"}}>
                            <div>المحافظة</div>
                            <select >
                            
                                <option value="الزرقاء">الزرقاء</option>
                                <option value="الزرقاء">الزرقاء</option>
                                <option value="الزرقاء">الزرقاء</option>
                                
                            </select>

                        </div>


                    <div className="flex" style={{marginTop:"5vh",marginRight:"50px",alignItems:"center",gap:"20px"}}>
                        <input type="checkbox" name="" id="" />
                        <div>قرأت واوافق على شروط استخدام الموقع</div>
                    </div>


                    <div className="orange_btn" style={{marginTop:"5vh",marginRight:"50px"}}>
                    نشر الان
                    </div>


                    


                
                </div>

                <div style={{flex:1,height:"fit-content",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <img  style={{border:"1px solid #707070",padding:"5%",borderRadius:"15px"}} src={add_img} alt="" />
                </div>

            </div>




        </div>

    </div>
  )
}

export default AddItem