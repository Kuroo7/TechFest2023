import "./preLoader.css"
import loder from "../../assets/loading.mp4"
const PreLoader = () => {
    return (
        <div className="PreLoader" >
            <video className="loader" autoPlay muted loop src={loder} type="video/mp4" />
        </div>
    )
}

export default PreLoader