import { useParams } from "react-router-dom";
import dayOneData from "./DayOneData";

const DayOneDetails = () => {
    const params = useParams();
    console.log(params.id);
    const data = dayOneData.filter((event) => params.id === event.name);
    console.log(data);
    return (

        <div >

            <section style={{ marginTop: "8%", marginLeft: "5%", marginRight: "5%" }} className="ambaSection">
                <div className="ambassadar">
                    <div className='tech'>
                        <div className="imgBox">
                            <img
                                className='img'
                                src={data[0].imgSrc}
                                alt="Desafio"
                            />
                        </div>
                        <div className="scrollBox">
                            <div className="headingBox">
                                <h3 className="heading" style={{ color: "White", marginBottom: "3%" }} >{data[0].heading}</h3>
                                <p style={{ color: "white" }} className="para">{data[0].headingPara}</p>
                                <h3 className="heading" style={{ marginTop: "20px", color: "white" }} >Rules</h3>

                                {data[0].rules.map((map) => {
                                    return <p style={{ color: "white" }} key={data.id} className="para">{map}</p>;
                                })}

                                <p>For Registrations, Contact {data[0].spocDetails}</p>
                            </div>
                        </div>
                    </div>
                    <p style={{ textAlign: "center" }}>scroll to view more</p>
                </div>
            </section>
        </div>
    )
}

export default DayOneDetails