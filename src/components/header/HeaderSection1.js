import React from 'react'


const HeaderSection1 = () => {
  const imageUrl = 'https://i.imgur.com/46s3EPN.png/'
  return (
    <div className='d-flex align-items-center ' style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundColor: '#cccccc',
      height: '500px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative'
    }}>
      <div className='col-md-5 ms-5  '>
        <h1 className='text-uppercase fw-bolder' style={{ color: 'orange', fontSize: 60 }} >It 's Time <br /> For Hiking </h1>
        <p className='fw-bold text-monospace fst-italic'>Lorem ipsum dolor lorem</p>
        <h5 className='my-3 fw-bolder'>
          <div style={{color:'red'}}>
        <a className='text-decoration-none fs-5 text-reset ' href="/">Read More</a>
          </div>

        </h5>
        <p className='fst-italic'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam vero, dolor culpa consequuntur dolores nobis rem minus eos asperiores ex illum? Fugit modi ullam odit enim quod tempore ipsam cumque, sed maxime?</p>
      </div>
    </div>
  )
}

export default HeaderSection1
