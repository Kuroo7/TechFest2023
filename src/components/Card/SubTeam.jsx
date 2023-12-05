import "./subTeam.css";
import SubTeamData from "./SubTeamData";
export const SubTeam = () => {
  return (
    <>
      <div className="all-card-subteam">
        {SubTeamData.map((p) => (
          <div key={p.id} className="sub-team-card">
            <div className="sub-team-photo">
              <div className="photo-circle">
                <img src={p.photo} alt="" />
              </div>
            </div>
            <div className="information">
              <h3>{p.name}</h3>
              <p className="position">{p.position}</p>
              <p className="contact-number">+91 {p.num}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
