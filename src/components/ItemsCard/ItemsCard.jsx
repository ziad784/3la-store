import React from 'react'
import {useNavigate} from 'react-router-dom'


function ItemsCard({name,price,pic}) {

  const navigation = useNavigate();

    const OnHover = (e) =>{
        e.currentTarget.children[1].style.display = "block"
        
    }
    const OnOut = (e) =>{
        e.currentTarget.children[1].style.display = "none"   
    }

    const GoToItem = () =>{

      navigation("/item")
    }

  return (
    <div style={{display:'flex',flexDirection:"column",alignItems:"center"}} >
        <div onMouseOver={(e)=>{OnHover(e)}} onMouseOut={(e)=>{OnOut(e)}} style={{position:"relative"}}><img className='item_img' onClick={()=>{GoToItem()}} src={pic} alt="item pic"  /> <div style={{display:"none",color:"white",backgroundColor:"#FFA340",position:"absolute",bottom:"3%",width:"90%",textAlign:"center",padding:"5px",marginRight:"10px",marginLeft:"10px",borderRadius:"3px",cursor:"pointer"}} onClick={()=>{console.log("PART");}}>إضافة الى السلة</div> </div>
        <div>{name}</div>
        <div>{price} د.ا</div>
    </div>
  )
}

export default ItemsCard