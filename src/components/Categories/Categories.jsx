import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import './Categories.css'


function Categories() {
  return (
    <div dir='rtl' style={{marginTop:"10vh"}}>
        <h2 style={{marginRight:"20px"}}>اقسام الموقع <span style={{color:"#FFA84D"}}>3</span></h2>

        <div className="flex cards" style={{overflowX:"auto",width:"100vw"}}>
            <CategoryCard title={"ملابس النساء"} subtitle={"أزياء رائعة للنساء"} pic={"./imgs/women.png"} />
            <CategoryCard title={"ملابس الرجال"} subtitle={"أزياء رائعة للرجال"} pic={"./imgs/men.png"} />
            <CategoryCard title={"ملابس الاطفال"} subtitle={"ملابس للاطفال"} pic={"./imgs/boy.png"} />
        </div>
        
    </div>
  )
}

export default Categories