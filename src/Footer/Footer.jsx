import React from "react";
import { Link } from "react-router-dom";
import { Signup } from "../Components/Form/Signup";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer w-full ">
        <div className="insideFooter">
          <div className="footerInfo">

            <div className="leftSide">
              <h4>Furniro.</h4>
              <p>
               At Furniro, we believe that every home deserves furniture that combines style, comfort, and functionality. We offer a carefully curated collection of modern and timeless pieces designed to transform your living spaces.
              </p>
            </div>

            <div className="listFormFlex">

              <div className="linksList">
                <ul>
                  <li className="heads">Links</li>

                  <li>
                    <Link 
                      to="/" 
                      className="cursor-pointer hover:text-[#B88E2F] transition"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link 
                      to="/shop" 
                      className="cursor-pointer hover:text-[#B88E2F] transition"
                    >
                      Shop
                    </Link>
                  </li>

                  <li>
                    <Link 
                      to="/about" 
                      className="cursor-pointer hover:text-[#B88E2F] transition"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link 
                      to="/contact" 
                      className="cursor-pointer hover:text-[#B88E2F] transition"
                    >
                      Contact
                    </Link>
                  </li>

                </ul>


                <ul>
                  <li className="heads">Help</li>

                  <li>
                    <Link 
                      to="/payment-options"
                      className="cursor-pointer hover:text-[#B88E2F] transition"
                    >
                      Payment Options
                    </Link>
                  </li>

                  <li>
                    <Link 
                      to="/returns"
                      className="cursor-pointer hover:text-[#B88E2F] transition"
                    >
                      Returns
                    </Link>
                  </li>

                  <li>
                    <Link 
                      to="/PrivacyPolicy"
                      className="cursor-pointer hover:text-[#B88E2F] transition"
                    >
                      Privacy Policies
                    </Link>
                  </li>

                </ul>
              </div>

              <Signup />

            </div>

          </div>
        </div>


        <div className="lastContent">
          © {currentYear} Furniro. All rights reserved.
        </div>

      </div>
    </>
  );
};

export default Footer;