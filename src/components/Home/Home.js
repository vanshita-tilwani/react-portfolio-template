import MyInfo from "./MyInfo";
import video from "../../assets/home_bg.mp4"
import "../../main.css"

function Home() {
    return (
        <div className="home-container on-animation">
            <video autoPlay loop muted className="homepage-video">
                <source src={video} type="video/mp4" />
            </video>
            <MyInfo></MyInfo>
        </div>
    );
}

export default Home