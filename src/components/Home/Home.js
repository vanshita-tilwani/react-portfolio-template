import video from "../../assets/home_bg.mp4"
import "./Home.css"

function Home() {
    return(
    <div className="main-container">
        <video  autoPlay loop muted className="homepage-video">
            <source src={video} type="video/mp4" />
        </video>
    </div>
    );
}

export default Home