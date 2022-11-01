import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Expirience from "./components/Expirience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
     <NavBar/>
     <Home/>
     <SocialLinks/>
     <About/>
     <Projects/>
     <Expirience/>
     <Contact/>
    </div>
  );
}

export default App;
