import './Header.css'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineUser,HiOutlineSearch,HiOutlineHeart,HiMenu} from 'react-icons/hi'
import {BsCart4} from 'react-icons/bs'
import logo from './logo.png'

function Header() {


    const [ismenu, setismenu] = useState(false);
    const [issidebar, setissidebar] = useState(false)

    const OpenMenu = (num) =>{
        if(ismenu === false){
            document.getElementById("header_menu"+num).style.display = "flex"
            setismenu(true);
        }else if(ismenu === true){
            document.getElementById("header_menu"+num).style.display = "none"
            setismenu(false);
        }
    }

    const OpenSidebar = () =>{
        if(issidebar === false){
            document.getElementById("right_menu").style.display = "flex"
            setissidebar(true);
        }else if(issidebar === true){
            document.getElementById("right_menu").style.display = "none"
            setissidebar(false);
        }
    }


    const OpenPopup = (id) =>{
        document.getElementById(id).style.display = "flex"

        if(id === "login_popup"){
            document.getElementById(id).style.display = "flex"
            document.getElementById("signup_popup").style.display = "none"
        }else{
            document.getElementById(id).style.display = "flex"
            document.getElementById("login_popup").style.display = "none"
        }
    }


    const ClosePopup = (e,id) =>{
        if(e.target === e.currentTarget){
            document.getElementById(id).style.display = "none"
        }
    }



  return (
    <header >

        <div className="right_menu_cont" id='right_menu' onClick={(e)=>{e.currentTarget === e.target ? OpenSidebar():null}}>
            <div className="right_menu" >
            <div className='active'>الرئيسية</div>
            <div onClick={()=>{OpenMenu("2")}}><div>الاقسام</div></div>
            <div style={{position:"relative"}} className="menu_cont">
                <div className='header_hover'>من نحن</div>

                <div className='header_menu' id='header_menu2' style={{display:"none"}}>
                        <Link to={"/category"}><div>ملابس النساء</div></Link> 
                        <Link to={"/category"}><div>ملابس الرجال</div></Link>
                        <Link to={"/category"}><div>ملابس الاطفال</div></Link>
                        <Link to={"/category"}><div>ملابس محلات</div></Link>
                    </div>
            </div>
            <div>اتصل بنا</div>
            <div className="black_btn">
                    <Link to={"/AddItem"}>بيع منتج</Link>
            </div>



            
            </div>
        </div>

        <div className="popup" style={{display:"none"}} id="login_popup" onClick={(e)=>{ClosePopup(e,"login_popup")}}>
            <div className="popup_cont">
                <div className="flex" style={{alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{fontSize:"25px"}}>تسجيل دخول</div>
                    <div><img src={logo} alt="logo pic" width={60} height={80} /></div>
                </div>

                <form onSubmit={(e)=>{e.preventDefault()}} className="login_form">
                    <div className='auth_input'>
                        <div>رقم الهاتف موبايل</div>
                        <input type="text" autoComplete='off'/>
                    </div>

                    <div className='auth_input'>
                        <div>كلمة المرور</div>
                        <input type="password" autoComplete='off'/>
                    </div>

                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <button  className="black_btn login_btn">تسجيل الدخول</button>
                        <div style={{marginTop:"2vh",cursor:"pointer"}} onClick={()=>{OpenPopup("signup_popup")}}>انشاء حساب جديد</div>
                    </div>

                </form>

            </div>
        </div>

        <div className="popup" style={{display:"none"}} id="signup_popup" onClick={(e)=>{ClosePopup(e,"signup_popup")}}>
            <div className="popup_cont">
                <div className="flex" style={{alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{fontSize:"25px"}}>انشاء حساب</div>
                    <div><img src={logo} alt="logo pic" width={60} height={80} /></div>
                </div>

                <form onSubmit={(e)=>{e.preventDefault()}} className="login_form">
                    <div className='auth_input'>
                        <div>رقم الهاتف موبايل</div>
                        <input type="text" autoComplete='off'/>
                    </div>

                    <div className='auth_input' >
                        <div>الاسم الكريم</div>
                        <input type="text" autoComplete='off'/>
                    </div>

                    <div className='auth_input'>
                        <div>كلمة المرور</div>
                        <input type="password" autoComplete='off'/>
                    </div>

                    <div className="flex" style={{justifyContent:"space-between",gap:"10px"}}>

                    <div className='auth_input' style={{flex:1}}>
                        <div>الدولة</div>
                        <input type="text" autoComplete='off'/>
                    </div>
                    <div className='auth_input' style={{flex:1}}>
                        <div>المحافظة</div>
                        <input type="text" autoComplete='off'/>
                    </div>

                    </div>

                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <button  className="black_btn login_btn">انشاء حساب جديد</button>
                        <div style={{marginTop:"2vh",cursor:"pointer"}} onClick={()=>{OpenPopup("login_popup")}}>تسجيل الدخول</div>
                    </div>

                </form>

            </div>
        </div>

        <div className="header_left">
            <div onClick={()=>{OpenPopup("login_popup")}} style={{cursor:"pointer"}} ><HiOutlineUser /></div>
            <div><HiOutlineSearch /></div>
            <div><HiOutlineHeart /></div>
            <div><Link to={"/cart"}><BsCart4 /></Link></div>
        </div>

        <div className="header_middle" >
            <div className="black_btn">
                <Link to={"/AddItem"}>بيع منتج</Link>
            </div>
            <div>اتصل بنا</div>
            <div style={{position:"relative"}} className="menu_cont">
                <div className='header_hover'>من نحن</div>

            <div className='header_menu' id='header_menu1' style={{display:"none"}}>
                    <Link to={"/category"}><div>ملابس النساء</div></Link> 
                    <Link to={"/category"}><div>ملابس الرجال</div></Link>
                    <Link to={"/category"}><div>ملابس الاطفال</div></Link>
                    <Link to={"/category"}><div>ملابس محلات</div></Link>
                </div>
            </div>
            <div onClick={()=>{OpenMenu("1")}}>

                <div>الاقسام</div>


                
                </div>
            <div className='active'>الرئيسية</div>
            
        </div>

        
            <div className='flex' style={{alignItems:"center",gap:"10px"}}>
            <Link to={"/"}>
                <div className="header_right">
                    <h2>علائة</h2>
                    <div><img src={logo} alt="logo img" /></div>
                  
                </div>
            </Link>
            <div className='menu_bargur' onClick={OpenSidebar}><HiMenu size={25} /></div>
            </div>

           
     
    

    </header>

  )
}

export default Header