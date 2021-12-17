import React from 'react'
import DiscountRight1 from './DiscountRight1'
import DiscountLeft1 from './DiscountLeft1'

const Discount = () => {
    return (
        <div className='d-flex bg-primary' style={{height:500}}>
            <DiscountRight1/>
            <DiscountLeft1/>
        </div>
    )
}

export default Discount
