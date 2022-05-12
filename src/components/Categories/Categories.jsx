import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import './Categories.css'
import women_img from '../../../imgs/women.png';
import men_img from '../../../imgs/men.png';
import boy_img from '../../../imgs/boy.png';


function Categories() {
  return (
    <div dir='rtl' style={{marginTop:"10vh"}}>
        <h2 style={{marginRight:"20px"}}>اقسام الموقع <span style={{color:"#FFA84D"}}>3</span></h2>

        <div className="flex cards" style={{overflowX:"auto",width:"100vw"}}>
            <CategoryCard title={"ملابس النساء"} subtitle={"أزياء رائعة للنساء"} pic={women_img} />
            <CategoryCard title={"ملابس الرجال"} subtitle={"أزياء رائعة للرجال"} pic={men_img} />
            <CategoryCard title={"ملابس الاطفال"} subtitle={"ملابس للاطفال"} pic={boy_img} />
        </div>
        
    </div>
  )
}

export default Categories