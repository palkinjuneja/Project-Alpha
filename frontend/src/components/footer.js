import React from "react";
import "../stylesheet/app.css";

const Footer = () => { 
  return (
<footer class="text-center text-lg-start bg-light text-muted">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div className="bttm">
            <h4>Ounion</h4>
            <span>Collaboration Made Easy!</span>
            <div className="bttm-right">
            <a href="#" class="fa fa-linkedin"></a>
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