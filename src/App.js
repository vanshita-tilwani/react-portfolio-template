import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer></Footer>
      </div>
    </Router>

  );
}

export default App;
