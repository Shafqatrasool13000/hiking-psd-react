import React from 'react'
import { letsGo } from './locals/LetsGo'

const Card = () => {
    return (
        <>
        <div className='d-flex justify-content-center '>
            {
                letsGo.map((curEl,i)=>{
                    const {img,title,description}=curEl
                  return(
                   <div key={i} className="card mx-3" style={{width: "18rem"}}>
                    <img src={img} height='250' className="card-img-top" alt={title}/>
                        <div className="card-body text-light" style={{height:'200px',backgroundColor:"grey"}} >
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>) 
                })
            }
        </div>
        <div className='d-flex justify-content-center my-2'>
            <button className="btn btn-sm text-center bg-danger">Show more</button>
        </div>
        </>
    )
}

export default Card
