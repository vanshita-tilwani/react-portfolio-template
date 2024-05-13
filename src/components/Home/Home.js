import MyInfo from "./MyInfo";
import video from "../../assets/home_bg.mp4"
import { routeAnimation } from "../Util";
import { motion } from "framer-motion";
import "../../main.css"

function Home() {
    return (
        <motion.div
            variants={routeAnimation}
            initial="initial"
            animate="final"
            className="home-container">
            <video autoPlay loop muted className="homepage-video">
                <source src={video} type="video/mp4" />
            </video>
            <MyInfo />
        </motion.div>
    );
}

export default Home