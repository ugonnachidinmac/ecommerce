import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    alert("SUBSCRIBE successfully");
    setEmail(""); // Clear the input after submission
  };

  return (
    <>
      <div className="footer">
        <div className="insideFooter">
          <div className="footerInfo">
            <div className='leftSide'>
              <h4>Funiro.</h4>
              <p>400 University Drive Suite 200 Coral <br /> Gables,<br />
                FL 33134 USA</p>
            </div>

            <div className='listFormFlex'>
              <div className='linksList'>
                <ul>
                  <li className='heads'> Links </li>
                  <li>Home</li>
                  <li>Shop</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
                <ul>
                  <li className='heads'> Help </li>
                  <li>Payment Options</li>
                  <li>Returns</li>
                  <li>Privacy Policies</li>
                </ul>
              </div>

              <form onSubmit={handleSubmit}>
                <fieldset>
                  <p className='heads'>Newsletter</p>
                  <fieldset className='fieldsetFlex'>
                    <input
                      type="email"
                      placeholder='Enter Your Email Address'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit">SUBSCRIBE</button>
                  </fieldset>
                </fieldset>
              </form>

            </div>
          </div>
        </div>
        <div className='lastContent'>2023 Funiro. All rights reserved</div>
      </div>
    </>
  );
}

export default Footer;
