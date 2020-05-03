import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props) {
    return(
    <div className="footer mt-5">
        <div className="container">
            <div className="row">             
                 
                <div className="col-7 col-sm-5">
                    <h5>Rent Vroom </h5>
                    <address>
                    RentVroom Pvt. Ltd.<br/>                      
                    No: 296, 3rd Cross Rd, Jakkasandra,<br />
		            1st Block, Kormangla Bengaluru,<br />
                    Karnataka 560034<br />
                    </address>
                </div>
                <div className="col-5 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    )
}

export default Footer;