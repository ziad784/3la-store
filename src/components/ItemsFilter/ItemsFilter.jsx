import React from 'react'
import './ItemsFilter.css'

function ItemsFilter() {
  return (
    <div dir='rtl'>
        <h2 style={{marginRight:"20px"}}>المنتجات <span style={{color:"#FFA84D"}}>10</span></h2>
        

        <ul className='filters'>
            <li className='filter_selected'>عرض الكل</li>
            <li>تيشرت</li>
            <li>تيشرت</li>
            <li>تيشرت</li>
            <li>تيشرت</li>
            <li>تيشرت</li>
            <li>تيشرت</li>
            <li>تيشرت</li>

        </ul>
        
    </div>
  )
}

export default ItemsFilter