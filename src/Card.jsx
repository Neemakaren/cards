import React from 'react'

const Card = ({data}) => {
    
  return (
    <div className='wrapper flip-card'>

    <div className='card flip-card-inner'>
        {data.map((d, index) =>{
            return (
            // <div className='card'>
            <div>
                <img src={d.image} alt="" className='card-image flip-card-front'/>
                {/* <div className="card-stats">
                    <span>5.0</span>
                    <span>{6} .</span>
                    <span>{d.name}</span>
                <p className="card-title"></p>
                <p className="card-price">{d.price}</p>
                </div> */}

            </div>
            )
           
        })}
    </div>

    </div>
    
  )
}

export default Card