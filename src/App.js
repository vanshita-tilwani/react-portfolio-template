import './App.css';
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import About from './components/About/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>  
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
    
  );
}

export default App;
