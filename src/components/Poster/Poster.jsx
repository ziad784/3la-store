import React from 'react'
import './Poster.css'

function Poster({bgco,subtitleco,title,subtitle,pic,width,height}) {
  return (
    <div className='poster' style={{backgroundColor:bgco}}>

        <div className="poster_left">
            <div  style={{textAlign:"right",width:"70%"}}>
               <div>{title}</div>
               <div style={{color:subtitleco}}>{subtitle}</div>
            </div>
            <div className="black_btn" style={{fontSize:"15px",padding:"5px"}}>
             تصفح العروض 
            </div>

        </div>

        <div className="poster_right">
            <div><img src={pic} width={width} height={height}  alt="poster img" /></div>
        </div>

    </div>
  )
}

export default Poster