import React from "react";
import CrousalCard from "../CrousalCard/CrousalCard";
import CrousalTest from "../CrousalTest/CrousalTest";
import Estimate from "../EstimateSection/Estimate";
import FooterLanding from "../FooterLanding/FooterLanding";
import NavbarLanding from "../NavbarLanding/NavbarLanding";

import "./LandingPage.scss";

function LandingPage() {
  return (
    <div className="col-sm-12 p-0">
      <NavbarLanding />
      <div className="col-sm-12 header_height p-0 ">
        <div className="col-sm-12 pr-0 padding_custom pt-5">
          <div className="row">
            <div className="col-sm-5  m-auto padding_nami_landing">
              <div className="col-sm-12 ">
               
                <h1 className="heading_color_landing">
                  <b>
                  Ultimate software development
                  </b>
                </h1>
                <p className="subheading_landing">
                Increasing your business success with technology
                </p>
              </div>
              <div className="col-sm-12">
                <span>
                  {" "}
                  <button
                    className="btn btn-primary button_join_border background_custom py-2 px-5 rounded-pill"
                    type="submit"
                  >
                   <b> Lets Do This!</b>
                  </button>
                </span>
                <span className="card_display">
                  {" "}
                  <button
                    className="btn btn-primary rounded-pill background_custom1   ml-3 py-2 px-4"
                    type="submit"
                  >
                   <b> Watch Overview</b>
                  </button>
                </span>
              </div>
            </div>
            <div className="col-sm-7 pr-0 m-auto text-right">
              <img
                src="https://powercode.co.uk/static/media/3d-2.f369a27c.png"
                className="img-fluid "
              />
            </div>
          </div>
        </div>
      

      <div className="col-sm-12 p-0 backgroundimage">
        <div className="col-sm-12 mt-5  pt-4  pb-4 backgroundC2">
          <div className="row">
        <div className="col-sm">
          <img className="img-fluid" src="https://powercode.co.uk/static/media/Union.017da616.svg"  />
          <h5 className="pt-2">UN Official Partner</h5>
        </div>
        <div className="col-sm">
          <img className="img-fluid" src="https://powercode.co.uk/static/media/Union2.bd48616e.svg"  />
          <h5 className="pt-2">Projects for WHO</h5>
        </div>
        <div className="col-sm">
          <img className="img-fluid" src="https://powercode.co.uk/static/media/Frame3.b15284fb.svg"  />
          <h5 className="pt-2">Forbes bussiness counselling</h5>
        </div>
        <div className="col-sm">
          <img className="img-fluid" src="https://powercode.co.uk/static/media/Toggle.8fcfa302.svg"  />
          <h5 className="pt-2">Co-founder of EASE association</h5>
        </div>
        <div className="col-sm">
          <img className="img-fluid" src="https://powercode.co.uk/static/media/computer.8dc0bab4.svg"  />
          <h5 className="pt-2">IT Academy owner</h5>
        </div>
        <div className="col-sm">
          <img className="img-fluid" src="https://powercode.co.uk/static/media/bookmarks.f6d25a31.svg"  />
          <h5 className="pt-2">Multi-award winner</h5>
        </div>
        <div className="col-sm">
          <img className="img-fluid" src="https://powercode.co.uk/static/media/diia.ea66dd83.svg"  />
          <h5 className="pt-2">Collaboration with Diia</h5>
        </div>
        </div>
        
      </div>
      <div className="col-sm-12 mt-5  pt-5  pb-3 px-5">
       <div className="col-sm-12">
        <h1><b>Get Your Perfectly-skilled Team </b></h1>
       </div>
       <div className="row pt-5 pb-3" >
        <div className="col-sm-3" >
          <img src="https://powercode.co.uk/static/media/up_to_7_days.49c05c1d.svg" className="img-fluid" />
        </div>
        <div className="col-sm-3 m-auto " >
          <div className="row" >
            <div className="col-sm-4" >
              <img src="https://powercode.co.uk/static/media/3days.1f570d48.svg" className="img-fluid" />
            </div>
            <div className="col-sm-8 pl-0" >
              <div className="col-sm-12 pl-0" >
                <h3 className="mb-1"><b>Step 1</b></h3>
              </div>
              <div className="col-sm-12 pl-0" >
                <badge className="badge  badge-primary background_custom rounded-pill px-2" >2 days</badge>
              </div>
             </div>
             <div className="col-sm-12 lineSpace pt-3" >
              You tell us your requirements to shape a vision of a design and development team perfect for your project.
              </div>
          </div>
        </div>
        <div className="col-sm-3 m-auto " >
          <div className="row" >
            <div className="col-sm-4" >
              <img src="https://powercode.co.uk/static/media/2days2.ae4e834f.svg" className="img-fluid" />
            </div>
            <div className="col-sm-8 pl-0" >
              <div className="col-sm-12 pl-0" >
                <h3 className="mb-1"><b>Step 2</b></h3>
              </div>
              <div className="col-sm-12 pl-0" >
                <badge className="badge  badge-primary background_custom rounded-pill px-2" >2 days</badge>
              </div>
             </div>
             <div className="col-sm-12 lineSpace pt-3" >
              You tell us your requirements to shape a vision of a design and development team perfect for your project.
              </div>
          </div>
        </div>
        <div className="col-sm-3 m-auto " >
          <div className="row" >
            <div className="col-sm-4" >
              <img src="https://powercode.co.uk/static/media/3days.1f570d48.svg" className="img-fluid" />
            </div>
            <div className="col-sm-8 pl-0" >
              <div className="col-sm-12 pl-0" >
                <h3 className="mb-1"><b>Step 3</b></h3>
              </div>
              <div className="col-sm-12 pl-0" >
                <badge className="badge  badge-primary background_custom rounded-pill px-2" >3 days</badge>
              </div>
             </div>
             <div className="col-sm-12 lineSpace pt-3" >
              You tell us your requirements to shape a vision of a design and development team perfect for your project.
              </div>
          </div>
        </div>
        
       </div>
      </div>
      </div>

      <div className="col-sm-12  p-5 mb-4" >
        <div className="col-sm-12 backgroundObjects px-4 " >
          <div className="row">
            <div className="col-sm-6 m-auto"> 
            <h3><b>Find Out Your Project Cost</b></h3>
          <h5 className="mt-3">We’ll contact you within one business day (GMT +2).</h5>
          <button className="btn btn-primary px-5 rounded-pill background_custom mt-3" ><b> Get estimation </b></button>
          </div>
            <div className="col-sm-6 text-center">
              <img src="../images/objects.png" className="img-fluid img_setting"  />
            </div>
          </div>
         
        </div>
      </div>
      <Estimate/>

      <div className="col-sm-12 mt-5  pt-4  pb-4 backgroundC3">
          <div className="row">
        <div className="col-sm m-auto">
          <h2 className="pt-2"><b>Our Partners:</b></h2>
        </div>
        <div className="col-sm text-center">
          <img className="img-fluid" src="https://api-api.powercode.pro/wp-content/uploads/2021/06/Frame-251.svg"  />
      
        </div>
        <div className="col-sm text-center">
          <img className="img-fluid" src="https://api-api.powercode.pro/wp-content/uploads/2021/06/Frame-249.svg"  />
        </div>
        <div className="col-sm text-center">
          <img className="img-fluid" src="https://api-api.powercode.pro/wp-content/uploads/2021/06/Frame-250.svg"  />
        </div>
        <div className="col-sm text-center">
          <img className="img-fluid" src="https://api-api.powercode.pro/wp-content/uploads/2021/06/Frame-252.svg"  />
        </div>
       
        </div>
        
      </div>

      <div className="col-sm-12 p-0 backgroundimage">


        <div className="col-sm-12 px-5 py-5">
          <div className="row" >
            <div className="col-sm-7" >
              <div className="col-sm-12" >
                <h1><b>Reasons to be proud</b></h1>
                <h5 className="pt-3 color_gray">
                Increasing the quality of our services and products is a never-ending process. We always care for our clients and thank every single one of them who chose us for collaboration. We create outstanding projects that change the world, boost progress, and bring economic and social benefits. Powercode evolves, and every new project makes us stronger and better for you! Your trust is genuinely our biggest value.
                </h5>
                <h5 className="pt-3 color_gray">
                Powercode is the Ultimate software development company. Increasing your business success with technology!
                </h5>
                <button className="btn btn-primary rounded-pill btn-lg mt-3" >
                  About Powercode
                </button>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="col-sm-12 back_card1 px-4 py-5">
                <h3><b>Industries we work with</b></h3>
                <h5 className="py-3"> <img className="img-fluid" src="https://powercode.co.uk/static/media/ecommerce.56a166b7.svg"  /> Ecommerce</h5>
                <h5 className="py-3"> <img className="img-fluid" src="https://powercode.co.uk/static/media/foodtech.dcb4b429.svg"  /> Foodtech</h5>
                <div className="row">
                  <div className="col-sm-7">
                  <h5 className="py-3"> <img className="img-fluid" src="https://powercode.co.uk/static/media/healthcare.652d5507.svg"  /> Healthcare</h5>
                <h5 className="py-3"> <img className="img-fluid" src="https://powercode.co.uk/static/media/enterprice.d99f01a2.svg"  /> Enterprise solutions</h5>
             </div>
             <div className="col-sm-5 text-right">
                <img src="../images/penta.png" className="img-fluid"  style={{marginRight:"-50px"}} />
             </div>
                </div>
              
                <h5 className="py-3"> <img className="img-fluid" src="https://powercode.co.uk/static/media/education.dbac0762.svg"  /> Education</h5>
                <h5 className="py-3"> <img className="img-fluid" src="https://powercode.co.uk/static/media/entertainment.61dd5973.svg"  /> Entertainment</h5>
                <h5 className="py-3"> <img className="img-fluid" src="https://powercode.co.uk/static/media/realestate.7c195b9c.svg"  /> Real estate</h5>
                <h5 className="py-3"> <img className="img-fluid" src="https://powercode.co.uk/static/media/hotel.2dc6fca9.svg"  /> Hospitality</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 px-5">
          <div className="col-sm-12 backgroundC4 p-5" >
         <div className="row">
          <div className="col-sm-3 m-auto">
            <h1><b>Awards & Recognition</b></h1>
          </div>
          <div className="col-sm-9">
            <CrousalCard />
          </div>
         </div>
         </div>
        </div>
        <div className="col-sm-12 px-5 py-5">
          <div className="row">
            <div className="col-sm-6">
              <h1><b>Case Studies</b></h1>
            </div>
            <div className="col-sm-6 text-right" >
              <button className="btn btn-primary px-5 rounded-pill background_custom" ><b> More cases </b></button>
            </div>
            <div className="col-sm-4 pt-5">
              <img src="https://api-api.powercode.pro/wp-content/uploads/2022/09/%D0%AD%D0%9A%D0%A1%D0%9F%D0%9E%D0%A0%D0%A2_-%D0%9F%D1%80%D0%B5%D0%B2%D1%8C%D1%8E.png" className="img-fluid img_blog" />
              <div className="col-sm-12 mt-3">
              <h4><b>RicePass</b></h4>
              <h5 className="color_gray">A food ordering platform connecting customers with hundreds of quality restaurants near them</h5>
              <span className="span_text" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span>
              <span className="span_text1" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span>
              </div>
            </div>
            <div className="col-sm-4 pt-5">
              <img src="https://api-api.powercode.pro/wp-content/uploads/2022/08/%D0%AD%D0%9A%D0%A1%D0%9F%D0%9E%D0%A0%D0%A2_-%D0%9F%D1%80%D0%B5%D0%B2%D1%8C%D1%8E-4.png" className="img-fluid img_blog" />
              <div className="col-sm-12 mt-3">
              <h4><b>Gemini Advisory</b></h4>
              <h5 className="color_gray">A food ordering platform connecting customers with hundreds of quality restaurants near them</h5>
              <span className="span_text" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span>
              <span className="span_text1" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span>
              </div>
            </div>
            <div className="col-sm-4 pt-5">
              <img src="https://api-api.powercode.pro/wp-content/uploads/2022/08/Preview.png" className="img-fluid img_blog" />
              <div className="col-sm-12 mt-3">
              <h4><b>L3D</b></h4>
              <h5 className="color_gray">A food ordering platform connecting customers with hundreds of quality restaurants near them</h5>
              <span className="span_text" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span>
              <span className="span_text1" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 mt-5 px-5 pt-4 pb-5 ">
          <CrousalTest />
        </div>
        <div className="col-sm-12 mt-5 px-5 pt-4  pb-4 backgroundC5">
          <div className="row">
        <div className="col-sm">
        <h3 className="pt-2"><b>What makes us powerful</b></h3>
        </div>
        <div className="col-sm">
          <img className="img-fluid" src="https://powercode.co.uk/static/media/Reliability.f952bde6.svg"  />
          <h5 className="pt-2">Reliability & Expertise</h5>
        </div>
        <div className="col-sm">
          <img className="img-fluid" src="https://powercode.co.uk/static/media/Smooth.2e1da016.svg"  />
          <h5 className="pt-2">Smooth Communication</h5>
        </div>
        <div className="col-sm">
          <img className="img-fluid" src="https://powercode.co.uk/static/media/Rapid.a35059fc.svg"  />
          <h5 className="pt-2">Rapid Team Assembling</h5>
        </div>
        <div className="col-sm">
          <img className="img-fluid" src="https://powercode.co.uk/static/media/Loyalty.dbe8fc2d.svg"  />
          <h5 className="pt-2">Loyalty to the Client</h5>
        </div>
        <div className="col-sm">
          <img className="img-fluid" src="https://powercode.co.uk/static/media/Solid.e313fff7.svg"  />
          <h5 className="pt-2">Solid Reputation</h5>
        </div>
        <div className="col-sm">
          <img className="img-fluid" src="https://powercode.co.uk/static/media/Fast.fcecfe66.svg"  />
          <h5 className="pt-2">Fast Feedback & Response</h5>
        </div>
        </div>
        
      </div>
      <div className="col-sm-12 px-5 py-5">
          <div className="row">
            <div className="col-sm-6">
              <h1><b>Case Insights</b></h1>
            </div>
            <div className="col-sm-6 text-right" >
              <button className="btn btn-primary px-5 rounded-pill background_custom" ><b> More insights </b></button>
            </div>
            <div className="col-sm-4 pt-5">
              <img src="https://api-api.powercode.pro/wp-content/uploads/2022/11/preview-1.png" className="img-fluid img_blog" />
              <div className="col-sm-12 mt-3">
              <h4><b>9 Top Tips to Avoid IT Business Failure</b></h4>
              <span className="span_text" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span>
              <span className="span_text1" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span>
              <h6 className="color_gray pt-3" ><b><i class="fas fa-calendar-week"></i> 15 November, 2022</b></h6>
              </div>
            </div>
            <div className="col-sm-4 pt-5">
              <img src="https://api-api.powercode.pro/wp-content/uploads/2022/11/Preview-Old.png" className="img-fluid img_blog" />
              <div className="col-sm-12 mt-3">
              <h4><b>9 Top Tips to Avoid IT Business Failure</b></h4>
              <span className="span_text" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span>
              <span className="span_text1" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span>
              <h6 className="color_gray pt-3" ><b><i class="fas fa-calendar-week"></i> 15 November, 2022</b></h6>
              </div>
            </div>
            <div className="col-sm-4 pt-5">
              <img src="https://api-api.powercode.pro/wp-content/uploads/2022/10/Preview-Old-2.png" className="img-fluid img_blog" />
              <div className="col-sm-12 mt-3">
              <h4><b>9 Top Tips to Avoid IT Business Failure</b></h4>
              <span className="span_text" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span>
              <span className="span_text1" ><b>Web Development</b></span> <span className="span_text1" ><b>Web Development</b></span>
              <h6 className="color_gray pt-3" ><b><i class="fas fa-calendar-week"></i> 15 November, 2022</b></h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 mt-5 px-5 pt-4  pb-4 backgroundC5">
        <div className="col-sm-12">
          <h1><b>Let’s talk!</b></h1>
          <h5>Fill out our form below or send us an email</h5>
        </div>
        <div className="col-sm-12 mt-3">
        <div className="row">
          <div className="col-sm-7">
            <div className="row">
            <div className="col-sm-6">
              <label><b>Your Name*</b></label>
              <input type="text" placeholder="Name" className="form-control form-control-lg " />
            </div>
            <div className="col-sm-6">
            <label><b>Company</b></label>
              <input type="text" placeholder="Company" className="form-control form-control-lg " />
            </div>
            <div className="col-sm-6 mt-3">
              <label><b>Your Phone*</b></label>
              <input type="text" placeholder="Phone" className="form-control form-control-lg " />
            </div>
            <div className="col-sm-6 mt-3">
            <label><b>Your E-mail*</b></label>
              <input type="text" placeholder="E-mail" className="form-control form-control-lg " />
            </div>
            <div className="col-sm-12 mt-3">
              <label><b>Project description*</b></label>
              <textarea type="text" placeholder="Project description" className="form-control form-control-lg " ></textarea>
            </div>
            <div className="col-sm-12 mt-4 pb-3">
            <button className="btn btn-primary px-5 rounded-pill background_custom" ><b> Submit </b></button>
            </div>
           
            </div>
          </div>
          <div className="col-sm-5"></div>
        </div>
        </div>

        <div className="row pb-5" >
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="col-sm-12 background_card p-4">
              <h3><b>Contacts:</b></h3>
              <h5 className="py-3"> <img className="img-fluid" src="https://powercode.co.uk/static/media/ecommerce.56a166b7.svg"  /> contact@powercode.co.uk</h5>
                <div className="row">
                  <div className="col-sm-8">
                  <h5 className="py-3"> <img className="img-fluid" src="https://powercode.co.uk/static/media/ecommerce.56a166b7.svg"  /> Our locations</h5>
                <h5 className="py-3"> <img className="img-fluid" src="https://powercode.co.uk/static/media/ecommerce.56a166b7.svg"  /> +442045772044</h5>
             </div>
             <div className="col-sm-4 text-right">
                <img src="../images/tri.png" className="img-fluid"  style={{marginRight:"-70px"}} />
             </div>
                </div>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
        </div>
        {/* <div className="col-sm-12 px-5 py-5">
         
         </div> */}
         <FooterLanding/>


      </div>









      </div>

   
     
    </div>
  );
}

export default LandingPage;
