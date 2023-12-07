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
              The first edition of Tech Pravaah was a resounding success, bringing together tech enthusiasts, students, and professionals for a weekend of exciting events, workshops, and networking opportunities. Here's a look back at the highlights:- Hackathon, Gaming Odyssey, Drone Show, Degrees of sounds, Tech Talks, Workshops etc. Tech Pravaah was a resounding success, exceeding expectations and setting the bar high for future editions. The event showcased the power of technology to connect people, solve problems, and create a better future. We now have the next edition of Tech Pravaah in store!
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
