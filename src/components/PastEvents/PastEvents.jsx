import "./pastEvents.css";
// import EventCarousel from "../EventsCarousel/EventCarousel"
import vanmoon from "../../assets/Vanmoon.png";
import shyam from "../../assets/Shyam.png";
const PastEvents = () => {
  return (
    <>
      <div className="PastEvents" id="past_carousel">
        <div className="know">
          <div className="PEleft">
            <h1>Know about the past.</h1>
            <p>
              Reflecting on the vibrant memories of ABES last year's TechFest
              Vibes-Revolution, we reminisce about an extraordinary confluence
              of technology and entertainment. The event was graced with a
              sensational DJ Night featuring the energetic beats of DJ Vanmoon.
              The intellectual dimension of the event was enriched by
              thought-provoking sessions from distinguished speakers like Shyam
              Sundar Pathak, Assistant Commissioner of GST, Noida.Additional
              wisdom was shared by speakers Saurabh Jain and Aditya
              Kumar.Exciting events like Gaming Odyssey, Robo Soccer, Junkyard,
              Circuitron, Coding Feud, and Big Business Idea added to the
              vibrancy. This TechFest was a celebration of innovation,
              creativity, and a vibrant tech-driven community, leaving an
              indelible mark on the collective memory of ABES College."
            </p>
            <button className="PEbutton">View Gallery</button>
          </div>
          <div className="PEright">
            <div className="card">
              <h5>DJ</h5>
              <div className="card-image">
                <img className="background-img" src={vanmoon} alt="" />
              </div>
            </div>
            <div className="card">
              <h5>Speaker</h5>
              <div className="card-image">
                <img className="background-img" src={shyam} alt="" />
              </div>
            </div>
            <div className="card">
              <h5>Speaker</h5>
              <div className="card-image">
                <img className="background-img" src={vanmoon} alt="" />
              </div>
            </div>
            <div className="card">
              <h5>Speaker</h5>
              <div className="card-image">
                <img className="background-img" src={vanmoon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="carousel-container">
                <EventCarousel />
            </div> */}
    </>
  );
};

export default PastEvents;
