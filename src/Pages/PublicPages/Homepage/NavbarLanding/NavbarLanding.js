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

    <div className="col-sm-12 pt-4 text-center">
      <h4><b>Company</b></h4>
      </div>
  </div>
    ):(null)}


    </div>

    <div className="col-sm-12 p-0 navpc" >
    <nav className=" navbar  navbar-expand-lg bg_nav_white1 menu-mob">
        <div className="col-sm-12">
          <a className="navbar-brand" >
          <Link to="/">  <img src="../images/logo.png" className="img-fluid" /></Link>
          </a>
          <button
            className="navbar-toggler nav_color_button"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse " style={{height:"100vh"}} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active pt-4">
                <p className="nav-link font_height  mb-0" href="#">
                <Link to="/aboutus" className="font_height about_us" style={{textDecoration:"none"}}><b>  About us </b></Link> 
                  
              
                  <span className="sr-only">(current)</span>
                </p>
              </li>
              <li className="nav-item active pt-0 ">
                <p className="nav-link font_height mb-0 " href="#">
                <Link to="/terms" className="font_height about_us" style={{textDecoration:"none"}}><b>  Terms and Conditions </b></Link> 
                  
              
                  <span className="sr-only">(current)</span>
                </p>
              </li>
              <li className="nav-item active pt-0 ">
                <p className="nav-link font_height mb-0 " href="#">
                <Link to="/faq" className="font_height about_us" style={{textDecoration:"none"}}><b>  FAQ's </b></Link> 
                  
              
                  <span className="sr-only">(current)</span>
                </p>
              </li>
             
            </ul>
            
            {/* <div className=" my-2 my-lg-0">
              <div  onClick={() =>
                            history.push(`/login`)
                          }
                           className="text_dec nav-item active ">
                <p className="nav-link font_height pl-0 " href="#">
                <b>  Login </b> <span className="sr-only">(current)</span>
                </p>
              </div>

              <a className="nav-item active">
                <button
                onClick={() =>
                  history.push(`/signup`)
                }
                  className="btn btn-outline-gray button_join_border btn-lg fontSizejoin px-4]"
                  type="submit"
                >
                  Join Now <i className="fas fa-arrow-right"></i>
                </button>
              </a>
            </div> */}
          </div>
        </div>
        
      </nav>

        {/* HEADER LAPTOP */}
        <div className=" ruby-menu-demo-header menu_active ">
          {/* ########################### */}
          {/* START: RUBY HORIZONTAL MENU */}
          <div className="  padding_set_nav  ruby-wrapper">
            <button className="c-hamburger c-hamburger--htx visible-xs">
              <span>toggle menu</span>
            </button>
            <ul className="ruby-menu padding_custom ">
              <li className="ruby-active-menu-item  ">
              <Link to="/">  <img src="../images/logo.png" className="img-fluid" /></Link>
              </li>
            
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
              

              <li className="ruby-menu-mega ruby-menu-right">
                <a href="#">Expertise</a>
                <div className="ruby-grid ruby-grid-lined">
                  <div className="col-sm-12 pt-3 pb-3">
                    <div className="col-sm-12 pb-4">
                    <h5><b>Expertise</b></h5>
                    </div>
                    <div className="col-sm-12">
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
                    </div>
                  </div>
                </div>
                <span className="ruby-dropdown-toggle" />
              </li>

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
