import React from "react";
import "../stylesheet/app.css";

const Footer = () => { 
  return (
<footer className="text-center text-lg-start bg-light text-muted">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="bttm">
            <h4>Ounion</h4>
            <span>Collaboration Made Easy!</span>
            <div className="bttm-right">
            <a href="#" className="fa fa-linkedin"></a>
            </div>
            <hr/>
            <span>© 2021 Copyright : All rights are reserved!</span>
            <div className="bttm-right">
                {/* <span>Join Union</span>
                <span>FAQs</span>
                <span>Support Us</span> */}
            </div>
        </div>

      </div>
    </div>
</footer>
  )
}

export default Footer;