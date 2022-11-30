import React, { useEffect, useState } from "react";
import "./NavbarLanding.scss";
import { Link, useHistory } from "react-router-dom";

function NavbarLanding() {
  const [show, handleShow] = useState(false);
  const [opennav, setOpennav] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 10) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  let history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`col-sm-12  fixed-top ${show && "bg_nav_white"} `}>

    <div className="col-sm-12  pt-3 pb-3 navmobile">
    {/*  */}
    <div className="row">
      <div className="col-md-8 col-8"><Link to="/">  <img src="../images/logo.png" className="img-fluid" /></Link></div>
      <div className="col-md-4 col-4 m-auto text-right">
        <button className="btn btn-dark" onClick={()=>setOpennav(true)}>
        <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>

    {opennav?(
      
    <div className="col-sm-12 pt-3 pr-5  content_height">
      <div className="row">
      <div className="col-md-8 col-8"><Link to="/">  <img src="../images/logo.png" className="img-fluid" /></Link></div>
      <div className="col-md-4 col-4 m-auto text-right">
        <button className="btn btn-dark" onClick={()=>setOpennav(false)}>
        <i class="fas fa-times"></i>
        </button>
      </div>
    </div>

    <div className="col-sm-12 pt-5">
      <h5><b>Company</b></h5>
      </div>
      <div className="col-sm-12 pt-4">
      <div>
      
      {/* collapse 1  */}
      <div className="col-sm-12 pl-0">
        <button className="btn btn-light p-0 background_cllapse" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
         <h5> <b>Expertise&nbsp; <i class="fas fa-plus"></i></b></h5>
        </button>
      <div className="collapse" id="collapseExample">
        <div className="col-sm-12 pl-0">
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" ><i id="color_ico_blue" class="fas fa-mobile-alt"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>Ecommerce</p>
          </div>
         </div>
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" > <i id="color_ico_blue" class="fas fa-hamburger"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>Foodtech</p>
          </div>
         </div>
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" ><i id="color_ico_blue" class="fas fa-heartbeat"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>Healthcare</p>
          </div>
         </div>
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" ><i id="color_ico_blue" class="fas fa-graduation-cap"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>Education</p>
          </div>
         </div>
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" ><i id="color_ico_blue" class="fas fa-smile"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>Entertainment</p>
          </div>
         </div>
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" ><i id="color_ico_blue" class="fas fa-building"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>Real State</p>
          </div>
         </div>
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" ><i id="color_ico_blue" class="fas fa-briefcase-medical"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>Hospitality</p>
          </div>
         </div>
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" ><i id="color_ico_blue" class="fas fa-chart-pie"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>Enterprise solutions</p>
          </div>
         </div>
        </div>
      </div>
      </div>

      {/* collapse 2  */}
      <div className="col-sm-12 pl-0 mt-4">
      <button className="btn btn-light p-0 background_cllapse" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
         <h5> <b>Services&nbsp; <i class="fas fa-plus"></i></b></h5>
        </button>
      <div className="collapse" id="collapseExample1">
      <div className="col-sm-12 pl-0">
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" ><i id="color_ico_blue" class="fas fa-mobile-alt"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>Mobile Development</p>
          </div>
         </div>
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" ><i id="color_ico_blue" class="fas fa-laptop"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>Web Development</p>
          </div>
         </div>
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" ><i id="color_ico_blue" class="fas fa-spray-can"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>Design</p>
          </div>
         </div>
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" ><i id="color_ico_blue" class="fas fa-chart-line"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>Business Analytics</p>
          </div>
         </div>
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" ><i id="color_ico_blue" class="fas fa-code"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>Legacy Code Modernization</p>
          </div>
         </div>
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" ><i id="color_ico_blue" class="fas fa-question-circle"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>QA</p>
          </div>
         </div>
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" ><i id="color_ico_blue" class="fas fa-external-link-alt"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>Ecommerce Consulting</p>
          </div>
         </div>
         <div className="row pt-2" >
          <div className="col-md-1 col-2 text-center" ><i id="color_ico_blue" class="fas fa-users"></i></div>
          <div className="col-md-11 col-10 pl-0" >
            <p>MVP</p>
          </div>
         </div>
        </div>
      </div>
    </div>
    </div>

    
    <div className="col-sm-12 pt-4 pl-0">
      <h5><b>Case Studies</b></h5>
      </div>

      
    <div className="col-sm-12 pt-4 pl-0">
      <h5><b>Insights</b></h5>
      </div>

      <div className="col-sm-12 pt-4 pl-0">
      <button
                      onClick={() =>
                        history.push(`/signup`)
                      }
                        className="btn btn-outline-dark  rounded-pill px-4"
                        type="submit"
                      >
                      <b>  Work <i className="fas fa-arrow-right"></i></b> 
                      </button>
      </div>

      <div className="col-sm-12 pt-4 pl-0">
      <button
                      onClick={() =>
                        history.push(`/signup`)
                      }
                        className="btn btn-dark rounded-pill px-4"
                        type="submit"
                      >
                      <b>  Get in Touch</b> 
                      </button>
      </div>

      </div>
  </div>
    ):(null)}


    </div>

    <div className="col-sm-12 p-0 navpc" >
    
        {/* HEADER LAPTOP-----------------------------------------------------------------------> */}
        <div className=" ruby-menu-demo-header menu_active ">
          {/* ########################### */}
          {/* START: RUBY HORIZONTAL MENU */}
          <div className="  padding_set_nav  ruby-wrapper">
            <button className="c-hamburger c-hamburger--htx visible-xs">
              <span>toggle menu</span>
            </button>
            <ul className="ruby-menu padding_custom ">
              <li className="ruby-active-menu-item  ">
              <Link to="/" className="style_logo">  <img src="../images/logo.png" className="img-fluid" /></Link>
              </li>
            
              {/* Work */}
              <li className="ruby-menu-right pt-2">
              <button
                      onClick={() =>
                        history.push(`/signup`)
                      }
                        className="btn btn-outline-dark  rounded-pill px-4"
                        type="submit"
                      >
                      <b>  Work <i className="fas fa-arrow-right"></i></b> 
                      </button>
              </li>

              {/* Get in Touch  */}
              <li className="ruby-menu-right mb-5 pt-2 pr-2">
               
                <button
                      onClick={() =>
                        history.push(`/signup`)
                      }
                        className="btn btn-dark rounded-pill px-4"
                        type="submit"
                      >
                      <b>  Get in Touch</b> 
                      </button>
                </li>

              {/* Insights  */}
              <li className="ruby-menu-mega ruby-menu-right">
                <a href="#">Insights</a>
              </li>

              {/* Case Studies  */}
              <li className="ruby-menu-mega ruby-menu-right">
                <a href="#">Case Studies</a>
              </li>
              
              {/* Services  */}
              <li className="ruby-menu-mega ruby-menu-right">
                <a href="#">Services</a>
                <div className="ruby-grid ruby-grid-lined">
                  <div className="col-sm-12 pt-3 pb-3">
                    <div className="col-sm-12 pb-4">
                    <h5><b>Services</b></h5>
                    </div>
                    <div className="col-sm-12">
                      {/* row 1  */}
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary  back_botton_color"><i class="fas fa-mobile"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>Mobile Development</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>Our iOS, Android, and cross-platform development services for your business</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary   back_botton_color"><i class="fas fa-laptop"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>Web development</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>CRM systems, delivery platforms, online grocery stores and alot more.</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">  
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary   back_botton_color"><i class="fas fa-spray-can"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>Design</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>Doctor booking apps, telehealth platforms and alot more.</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary   back_botton_color"><i class="fas fa-graduation-cap"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>Business Analytics</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>E-learning platforms, childcare apps, CRM, streaming services, and others.</h6>
                            </div>
                          </div>
                        </div>
                       </div>
                       {/* row 2  */}
                      <div className="row pt-4">
                        <div className="col-sm-3">
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary  back_botton_color"><i class="fas fa-code"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>Legacy Code Modernization</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>Legacy Code Modernization development services for your business</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary   back_botton_color"><i class="fas fa-question"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>QA</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>QA Systems will help you to increase the system efficincy.</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">  
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary   back_botton_color"><i class="fas fa-link"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>Ecommerce Consulting</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>Ecommerce Consulting and alot more.</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary   back_botton_color"><i class="fas fa-users"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>MVP</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>E-learning platforms, childcare apps, CRM, streaming services, and others.</h6>
                            </div>
                          </div>
                        </div>
                       </div>
                    </div>
                  </div>
                </div>
                <span className="ruby-dropdown-toggle" />
              </li>

              {/* Expertise  */}
              <li className="ruby-menu-mega ruby-menu-right">
                <a href="#">Expertise</a>
                <div className="ruby-grid ruby-grid-lined">
                  <div className="col-sm-12 pt-3 pb-3">
                    <div className="col-sm-12 pb-4">
                    <h5><b>Expertise</b></h5>
                    </div>
                    <div className="col-sm-12">
                      {/* row 1  */}
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary  back_botton_color"><i class="fas fa-mobile"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>Mobile Development</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>Our iOS, Android, and cross-platform development services for your business</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary   back_botton_color"><i class="fas fa-hamburger"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>Foodtech</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>CRM systems, delivery platforms, online grocery stores and alot more.</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">  
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary   back_botton_color"><i class="fas fa-heartbeat"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>Healthcare</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>Doctor booking apps, telehealth platforms and alot more.</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary   back_botton_color"><i class="fas fa-graduation-cap"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>Education</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>E-learning platforms, childcare apps, CRM, streaming services, and others.</h6>
                            </div>
                          </div>
                        </div>
                       
                      </div>
                      {/* row 2  */}
                      <div className="row mt-5">
                        <div className="col-sm-3">
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary  back_botton_color"><i class="fas fa-smile"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>Entertainment</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>Entertainment and cross-platform development services for your business</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary   back_botton_color"><i class="fas fa-building"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>Real State</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>Real State, online grocery stores and alot more.</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">  
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary   back_botton_color"><i class="fas fa-briefcase"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>Hospitality</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>Doctor booking apps, telehealth platforms and alot more.</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="row">
                            <div className="col-sm-2">
                              <button className="btn btn-primary   back_botton_color"><i class="fas fa-chart-pie"></i></button>
                            </div>
                            <div className="col-sm-10 m-auto">
                              <h6><b>Enterprise solutions</b></h6>
                            </div>
                            <div className="col-sm-12 pt-2">
                              <h6>E-learning platforms, childcare apps, CRM, streaming services, and others.</h6>
                            </div>
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
                <span className="ruby-dropdown-toggle" />
              </li>

              {/* Company  */}
              <li className="ruby-menu-mega ruby-menu-right">
                <a href="#">Company</a>
              </li>
            
             
            
            
            </ul>
          </div>
          {/* END:   RUBY HORIZONTAL MENU */}
          {/* ########################### */}
        </div>
      
        {/* END: RUBY DEMO HEADER */}

    </div>






   



    </div>
  );
}

export default NavbarLanding;
