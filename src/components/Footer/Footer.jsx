import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import techlogo from "../../assets/logo.png"
import { faChevronRight, faSquarePhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>

      <footer className="footer">

        <div className="footer-top">
          <div className="container">

            <div className="footer-brand">
              <img className="Logo-image" src={techlogo} width="200px" />


              <p className="footer-text">
                This is the official website of Tech Pravaah ,the technical fest of ABES Engineering College, Ghaziabad
              </p>

            </div>
            <ul className="footer-list">

              <li>
                <p className="footer-list-title">Useful Links</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <FontAwesomeIcon icon={faChevronRight} beat />

                  <span className="span">Sponsorship Brochure</span>
                </a>
              </li>
              <li>
                <a href="#events_carousel" className="footer-link">
                  <FontAwesomeIcon icon={faChevronRight} beat />

                  <span className="span">Events</span>
                </a>
              </li>



              <li>
                <a href="#past_carousel" className="footer-link">
                  <FontAwesomeIcon icon={faChevronRight} beat />

                  <span className="span">Past Events</span>
                </a>
              </li>
              <li>
                <a href="#faq_carousel" className="footer-link">
                  <FontAwesomeIcon icon={faChevronRight} beat />
                  <span className="span">FAQ</span>
                </a>
              </li>


            </ul>

            <ul className="footer-list">

              <li>
                <p className="footer-list-title">Reach us on</p>
              </li>

              <li>

                <ul className="social-list">

                  <li>
                    <a href='https://www.instagram.com/pravaah_abesec'><FontAwesomeIcon className=' socialIcon' icon={faInstagram} /></a>

                  </li>

                  <li>
                    <a href='#'><FontAwesomeIcon className='socialIcon' icon={faYoutube} /></a>

                  </li>

                  <li>
                    <a href='#'><FontAwesomeIcon className='socialIcon' icon={faFacebook} /></a>
                  </li>


                </ul>

              </li>

              <li className="footer-item">
                <a href="mailto:techfest23@abes.ac.in" className="footer-link">techfest23@abes.ac.in</a>
              </li>


              <li className="footer-item">
                <FontAwesomeIcon icon={faSquarePhone} style={{ color: "#26d110", }} />
                <a href="tel:+919508219804" className="footer-link">+91 9508219804</a>
              </li>
            </ul>


            <address className="address">
              <div className="map">
                <iframe title='abes'
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8889002703554!2d77.4437602149526!3d28.633091682417557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee3d2df45167%3A0xe0ac343085e12a8f!2sABES%20ENGINEERING%20COLLEGE%2C%20NH%2024%2C%20Chipiyana%20Buzurg%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1666931394472!5m2!1sen!2sin"
                  width="80%"
                  height="200px"

                  // style="border: 0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className='rounded'
                ></iframe>
              </div>


            </address>


          </div>
        </div >
        <br />
      </footer >
    </>
  )
}

export default Footer