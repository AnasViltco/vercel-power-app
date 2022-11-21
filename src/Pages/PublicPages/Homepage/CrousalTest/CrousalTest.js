import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CrousalTest() {
    
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
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
                     <div className='row'>
                        <div className='col-sm-6 m-auto'>
                            <h1><b>Clients about us</b></h1>
                            <h2 className='py-3'>If you need a digital product will become #1 worldwide - you've found your partner in crime.</h2>
                            <h6><b>Natalya Ulyanova</b></h6>
                            <h6>Founder and CEO at level UP Ukraine</h6>
                            <h6 style={{color:"#3574D6"}}><b><i class="fas fa-graduation-cap"></i> Ukraine, Media</b></h6>
                        </div>
                        <div className='col-sm-6'>
                        <iframe width="100%" height="400" style={{borderRadius:"20px"}} src="https://www.youtube.com/embed/I6Ld2tpH3p0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                     </div>
                    </div>
            </Carousel>
      
     
       
  

  )
}

export default CrousalTest