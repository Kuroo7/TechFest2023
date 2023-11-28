
import "./pastEvents.css"
const PastEvents = () => {
    return (
        <>
            <div className="PastEvents" id="past_carousel">
                <div className="know">
                    <div className="PEleft">
                        <h1>
                            Know about the past.
                        </h1>
                        <p>
                            ABES annual cultural fest is one for those who love and
                            enjoy entertainment. This festival is a treat for music,
                            culture, and theatre art lovers. It has popular events
                            that are not only entertaining but also make you win goodies and
                            exciting cash prizes. Music enthusiasts and dance lovers can never
                            miss this fest, as they have seen the likes of Guru Randhawa, Nikhil
                            D'Souza, Jassie Gill, and Babbal Rai perform here.
                            With its exuberant atmosphere and liveliness,
                            this festival is a full packet of memories and new experiences.
                        </p>
                        <button className="PEbutton">
                            View Gallery
                        </button>
                    </div>
                    <div className="PEright">
                        <div className="card">
                            <h5>Performer</h5>
                            <div className="card-image">
                                <img className="background-img" src="/src/assets/sample.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="card">
                            <h5>Performer</h5>
                            <div className="card-image">
                                <img className="background-img" src="/src/assets/sample.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="card">
                            <h5>Performer</h5>
                            <div className="card-image">
                                <img className="background-img" src="/src/assets/sample.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="card">
                            <h5>Performer</h5>
                            <div className="card-image">
                                <img className="background-img" src="/src/assets/sample.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PastEvents