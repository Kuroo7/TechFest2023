import "./footer.css"

import techlogo from "../../assets/logo.png"

const Footer = () => {
    return (
        <>
            <div className="Footer" >
                {/* <img src={techlogo} alt="" /> */}

            </div>
            {
                <footer className="footer">

                <div className="footer-top">
                  <div className="container">
        
                    <div className="footer-brand">
                        <p><img src={techlogo} width="200px"/>
                        </p>
        
        
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
                          <ion-icon name="chevron-forward"></ion-icon>
        
                          <span className="span">Sponsorship Brochure</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footer-link">
                          <ion-icon name="chevron-forward"></ion-icon>
        
                          <span className="span">Events</span>
                        </a>
                      </li>
        
                      <li>
                        <a href="#" className="footer-link">
                          <ion-icon name="chevron-forward"></ion-icon>
        
                          <span className="span">Events Details</span>
                        </a>
                      </li>
        
                      <li>
                        <a href="#" className="footer-link">
                          <ion-icon name="chevron-forward"></ion-icon>
        
                          <span className="span">Rules</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footer-link">
                          <ion-icon name="chevron-forward"></ion-icon>
        
                          <span className="span">Past Events</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footer-link">
                          <ion-icon name="chevron-forward"></ion-icon>
        
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
                            <a href="#" className="social-link">
                              <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                          </li>
            
                          <li>
                            <a href="#" className="social-link">
                              <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                          </li>
            
                          <li>
                            <a href="#" className="social-link">
                              <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                          </li>
            
            
                        </ul>
            
                      </li>
        
                      <li className="footer-item">
                        <ion-icon name="mail-outline"></ion-icon>
        
                        <a href="mailto:contact@example.com" className="footer-link">contact@example.com</a>
                      </li>
        
        
                      <li className="footer-item">
                        <ion-icon name="call-outline"></ion-icon>
        
                        <a href="tel:+152534468854" className="footer-link">+152 534-468-854</a>
                      </li>
        
                    </ul>
        
        
                        <address className="address">
                          {/* <ion-icon name="location-outline"></ion-icon> */}
                            <div className="col-lg-4 col-11 rounded">
                              <iframe title='abes' 
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8889002703554!2d77.4437602149526!3d28.633091682417557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee3d2df45167%3A0xe0ac343085e12a8f!2sABES%20ENGINEERING%20COLLEGE%2C%20NH%2024%2C%20Chipiyana%20Buzurg%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1666931394472!5m2!1sen!2sin" 
                              width="80%" 
                              height="200px" 
                              style="border: 0"
                              allowFullScreen="" 
                              loading="lazy" 
                              referrerPolicy="no-referrer-when-downgrade"
                              className='rounded'
                              ></iframe>
                            </div>
        
                          
                        </address>
                      
        
                  </div>
                </div>
        
               
        <br/>
              </footer>
               
            //    ionicon link
            
                // <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                //   <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            }
        </>
    )
}

export default Footer