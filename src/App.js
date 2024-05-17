import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import { routeAnimation } from "./components/common/Util";
import { motion, AnimatePresence } from "framer-motion";
import { Route, Routes, Navigate, BrowserRouter, useLocation } from "react-router-dom";
import './main.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="final"
      exit="exit">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </motion.div>
  );
}

export default App;
