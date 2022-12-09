import React from "react";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <>
       <footer className="bd-footer py-4 py-md-5 mt-5 ">
  <div className="container py-4 py-md-5 px-4 px-md-3">
    <div className="row">
      <div className="col-lg-3 mb-3">
       
        <img className="brand-logo-dark" src="https://timestint.s3.amazonaws.com/static/images/logo.png" alt="" width="109" height="39" srcSet="https://timestint.s3.amazonaws.com/static/images/logo.png 2x"></img>
        <ul className="list-unstyled small text-muted">
          <li className="mt-4 text-secondary">Easily communicate with Time Stint app on all platforms.</li>
          

        </ul>
        <button type="button" className="btn btn-outline-primary mt-4">Primary</button>
        

      </div>
      <div className="col-6 col-lg-2 offset-lg-1 mb-3">
        <h5 className="pb-4">About</h5>
        <ul className="list-unstyled font1 ">
          <li className="mb-2 pb-2"><a  href="/">About Us</a></li>
          <li className="mb-2 pb-2"><a href="/docs/5.2/">Contact us</a></li>
          <li className="mb-2 pb-2"><a href="/docs/5.2/examples/">career</a></li>
        
        </ul>
      </div>
      <div className="col-sm-7 col-lg-5 col-xl-3 ">
					<h4 className="footer-classic-title pb-4">Features</h4>
          
					<ul className="list footer-classic-list footer-classic-list_2-cols font1 p-0 ">
					  <li className="pb-2"><a href="/angular/">Sign Up</a></li>
                      <li className="pb-2"><a href="/">Online Help</a></li> 
					  <li className="pb-2"><a href="/features/">Features</a></li>
           
					  <li className="pb-2"><a href="/faq/">FAQ</a></li>
					  <li className="pb-2"><a href="/pricing/">Pricing</a></li>
                      <li className="pb-2"><a href="/privacy-policy/">Privacy policy</a></li>
					  <li className="text-nowrap"><a href="/terms-and-conditions/">Terms &amp; Conditions</a></li>
					</ul>
				  </div>
                  <div className="col-sm-5 col-lg-9 col-xl-2">
					<h4 className="footer-classic-title pb-4">Contacts</h4>
					<div className="row row-20 row-sm-35">
					  <div className="col-6 col-sm-12 col-lg-8 col-xl-12 ">
						<div className="row row-10 text-default">
						  <div className="col-lg-6 col-xl-12 pb-"><a href="mailto:info@timestint.com" className="text-secondary">info@timestint.com</a></div>
						  <div className="col-lg-6 col-xl-12"><a className="big text-secondary" href="tel:+91 8824647261">+91 8824647261</a></div>
						</div>
					  </div>
					  <div className="col-6 col-sm-12 col-lg-4 col-xl-12 text-right text-sm-left">
						<div className="group group-xs"><a className="link link-social-1 mdi mdi-twitter" href="https://twitter.com/timestint" target="_blank"></a><a className="link link-social-1 mdi mdi-facebook" href="https://www.facebook.com/timestint" target="_blank"></a><a className="link link-social-1 mdi mdi-instagram" href="https://www.instagram.com/timestintst/" target="_blank"></a><a className="link link-social-1 mdi mdi-linkedin" href="https://www.linkedin.com/company/time-stint" target="_blank"></a></div>
					  </div>
					</div>  
				  </div>
     
    </div>
  </div>
  <hr/>

  <div className="footer-classic-aside text-center">
			  <div className="container">
				<p className="rights"><span>©&nbsp; </span><span className="copyright-year">2022</span><span>&nbsp;</span><span>Time Stint</span></p>
			  </div>
			</div>
  
</footer>


 
  

    
    
        </>

        );
    };
    

    export default Footer;