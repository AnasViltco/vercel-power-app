import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CrousalCard() {
    
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (

        <Carousel responsive={responsive}>
            <div className='col-sm-12'>
                        <img src='https://api-api.powercode.pro/wp-content/uploads/2021/06/fbd_web_development_award.svg' className='img-fluid' />
                    </div>
                    <div className='col-sm-12'>
                        <img src='https://api-api.powercode.pro/wp-content/uploads/2021/06/Top-Web-Companies-Los-Angeles-2020-1-1.ce218f41-1.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-12'>
                        <img src='https://api-api.powercode.pro/wp-content/uploads/2021/06/B2B.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-12'>
                        <img src='https://api-api.powercode.pro/wp-content/uploads/2021/06/upwork.png' className='img-fluid' />
                    </div>
                    <div className='col-sm-12'>
                        <img src='https://api-api.powercode.pro/wp-content/uploads/2021/06/badge-top-app-company.png' className='img-fluid' />
                    </div>
            </Carousel>
      
     
       
  

  )
}

export default CrousalCard