import React from 'react'
import DiscountRight from './DiscountRight'
import DiscountLeft from './DiscountLeft'

const Discount = () => {
    return (
        <div className='d-flex bg-primary' style={{height:500}}>
            <DiscountLeft/>
            <DiscountRight/>
        </div>
    )
}

export default Discount
