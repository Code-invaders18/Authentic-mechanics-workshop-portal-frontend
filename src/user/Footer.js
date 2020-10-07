import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../itext.jpg";

const Footer = () => {
  return (
    <div className="shadow ml-3 mr-3">
      <footer className="footer bg-dark mt-auto py-2">
        <div className="container-fluid bg-dark tex-white text-center py-2">
          <div className="row">
            <div className="col-12">
              <a href="https://www.instagram.com/authenticmechanics/">
                <i
                  class="fab fa-instagram"
                  style={{ fontSize: "30px", color: "white" }}
                />
              </a>
              <a href="https://www.facebook.com/Authentic-Mechanics-108704500894342/?notif_id=1592942206337826&notif_t=page_fan&ref=notif">
                <i
                  class="fab fa-facebook-f"
                  style={{
                    fontSize: "30px",
                    color: "white",
                    marginLeft: "20px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <img className="footerimage" src={FooterLogo} alt="no image" />
          <h4 className="footertext col-2">
            We care for cars , we care for our customers!
          </h4>
        </div>

        <div className="container-fluid bg-dark tex-white text-center py-2">
          <p className="text-muted">
            <Link to="/" className="text-muted mr-5">
              AboutUs
            </Link>

            <Link to="/signin" className="text-muted mr-5">
              SignIn
            </Link>
            <Link to="/user/servicerequest" className="text-muted mr-5">
              Service Request
            </Link>
            <Link to="/contactus" className="text-muted mr-5">
              Contact Us
            </Link>
            <Link to="/legal" className="text-muted mr-5">
              Legal
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
// <button className="btn btn-warning bt-lg">Contact Us</button>
// <div className="container">
//           <span className="text-muted">
//             An amazing <span className="text-white">MERN</span> bootcamp
//           </span>
//         </div>
