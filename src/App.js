import "./App.css";
import Home from "./PortfolioContainer/Home/Home"
import About from "./PortfolioContainer/AboutMe/About";
import Navbar from "./PortfolioContainer/Navbar/Navbar";

import Contact from "./PortfolioContainer/ContactMe/Contact";
import Project from "./PortfolioContainer/Project/Project";
import Footer from "./PortfolioContainer/Footer/Footer";
import Skills from "./PortfolioContainer/Skills/Skills";
import Calender from "./PortfolioContainer/Calender/Calender";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <About/>

        <Project/>
        <Skills/>
        <Calender/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
