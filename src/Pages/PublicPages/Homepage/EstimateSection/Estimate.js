import React from 'react'
import { useState } from 'react';
import "./Estimate.scss"

function Estimate() {
    const [acquisition, setAcquisition] = useState(1);

    const onetab =()=>{
        setAcquisition(1)    
    }

    const secondtab =()=>{
        setAcquisition(2)    
    }
    const thirdtab =()=>{
        setAcquisition(3)    
    }


  return (
    <div className="col-sm-12 px-5">
        <h1><b>Estimation of your project</b></h1>

       
        {acquisition == 1 ? (
            //  {/* row1 */}
        <div className='row' >
            <div className='col-sm-5 ' >
                <div className='row  py-4'>
                    <div className='col-sm-2' >
                    <button className='btn btn-primary bg_tab rounded-circle py-2' ><img src="https://powercode.co.uk/static/media/bluehouse.171a0723.svg" className='img-fluid'  /></button>
                    </div>
                    <div className='col-sm-10 m-auto' >
                    <h5 ><b>  Getting client’s requirements</b></h5>
                    </div>
                </div>
                <div className='row  py-4' onClick={()=>secondtab()}>
                    <div className='col-sm-2 pl-4' >
                    <img src="https://powercode.co.uk/static/media/OvalGrey.a62e2f85.svg" className='img-fluid'  />
                    </div>
                    <div className='col-sm-10 m-auto' >
                    <h5 className='text_tab'><b>  Solution proposal & project estimation</b></h5>
                    </div>
                </div>
                <div className='row  py-4' onClick={()=>thirdtab()}>
                    <div className='col-sm-2 pl-4' >
                    <img src="https://powercode.co.uk/static/media/OvalGrey.a62e2f85.svg" className='img-fluid'  />
                    </div>
                    <div className='col-sm-10 m-auto' >
                    <h5 className='text_tab'><b>  Detailed analysis & PRD</b></h5>
                    </div>
                </div>
                {/* className='color_card' */}
                
            </div>
            <div className='col-sm-7'>
                <ul>
                    <li><h5 >In case we receive enough information, we make a rough estimation to define the time frame and budget, and make a brief description of our solution. In case there’s not enough information to make a rough estimation, we just ask the client for more details. It’s that simple.</h5></li>
                    <li><h5 >In case we receive enough information, we make a rough estimation to define the time frame and budget, and make a brief description of our solution. In case there’s not enough information to make a rough estimation, we just ask the client for more details. It’s that simple.</h5></li>
                </ul>
            </div>
        </div>
       ) : acquisition === 2 ? (
        //  {/* row1 */}
        <div className='row' >
        <div className='col-sm-5 '>
          
            <div className='row  py-4' onClick={()=>onetab()}>
                <div className='col-sm-2 pl-4' >
                <img src="https://powercode.co.uk/static/media/OvalGrey.a62e2f85.svg" className='img-fluid'  />
                </div>
                <div className='col-sm-10 m-auto' >
                <h5 className='text_tab'><b> Getting client’s requirements  </b></h5>
                </div>
            </div>
            <div className='row  py-4 ' >
                <div className='col-sm-2' >
                <button className='btn btn-primary bg_tab rounded-circle py-2' ><img src="https://powercode.co.uk/static/media/bluehouse.171a0723.svg" className='img-fluid'  /></button>
                </div>
                <div className='col-sm-10 m-auto' >
                <h5 ><b> Solution proposal & project estimation </b></h5>
                </div>
            </div>
            <div className='row   py-4'  onClick={()=>thirdtab()} >
                <div className='col-sm-2 pl-4' >
                <img src="https://powercode.co.uk/static/media/OvalGrey.a62e2f85.svg" className='img-fluid'  />
                </div>
                <div className='col-sm-10 m-auto' >
                <h5 className='text_tab'><b>  Detailed analysis & PRD</b></h5>
                </div>
            </div>
            {/* className='color_card' */}
            
        </div>
        <div className='col-sm-7'>
            <ul>
                <li><h5 >Once our proposed solution fits the client and we have enough data for a detailed estimation, we create a scope estimation that includes a timeline with iterations, acceptance criteria, deadlines, etc.</h5></li>
                <li><h5 >These details regarding the stages of the development process, the quality of software pieces, and deadlines give the client a better understanding of the product creation process. At this stage, the client can give us their additional concerns and expectations regarding the development process and the final result so we can use them in the detailed analysis.</h5></li>
            </ul>
        </div>
    </div>
       ): acquisition === 3 ? (
        //  {/* row1 */}
        <div className='row' >
        <div className='col-sm-5 '>
          
            <div className='row  py-4' onClick={()=>onetab()}>
                <div className='col-sm-2 pl-4' >
                <img src="https://powercode.co.uk/static/media/OvalGrey.a62e2f85.svg" className='img-fluid'  />
                </div>
                <div className='col-sm-10 m-auto' >
                <h5 className='text_tab'><b> Getting client’s requirements  </b></h5>
                </div>
            </div>
            <div className='row  py-4' onClick={()=>secondtab()}>
                <div className='col-sm-2 pl-4' >
                <img src="https://powercode.co.uk/static/media/OvalGrey.a62e2f85.svg" className='img-fluid'  />
                </div>
                <div className='col-sm-10 m-auto' >
                <h5 className='text_tab'><b> Solution proposal & project estimation  </b></h5>
                </div>
            </div>
            <div className='row  py-4'>
                <div className='col-sm-2' >
                <button className='btn btn-primary bg_tab rounded-circle py-2' ><img src="https://powercode.co.uk/static/media/bluehouse.171a0723.svg" className='img-fluid'  /></button>
                </div>
                <div className='col-sm-10 m-auto' >
                <h5 ><b> Detailed analysis & PRD </b></h5>
                </div>
            </div>
          
            {/* className='color_card' */}
            
        </div>
        <div className='col-sm-7'>
            <ul>
                <li><h5 >When our solution fits, but there are not enough details, we start business analysis and create a PRD with functional and non-functional requirements and wireframes. Depending on the product specification, PRD may include diagrams, user story, role, permission, and/or risk matrix, etc.</h5></li>
                <li><h5 >At this final stage of project estimation, we give our clients a full picture of their product development process, as detailed as it can be. The Product Requirements Document and product specification cover logic, functionality, design, and every other compound of both product and project.</h5></li>
            </ul>
        </div>
    </div>
       ):(null)}
      </div>
  )
}

export default Estimate