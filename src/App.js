import logo from "./logo.svg";
import "./App.css";
import MyNav from "./components/MyNav/MyNav";
import Responsive from "./components/Slider/Slider";
import CardOverlay from "./components/CardOverlay/CardOverlay";
import Topbar from "./components/Topbar/Topbar";
import FeaturedSection from "./components/FeaturedSection/FeaturedSection";
import { sec1 } from "./data.mjs";

function App() {

  
  return (
    <div className="App">
      <Topbar />
      <MyNav />
      <CardOverlay />
      <h1 className="display-1 mt-4">Find your drive</h1>
      <h4>Explore the world's largest car sharing market place</h4>
      <div className="d-flex justify-content-center">
        <div className="slider-section" style={{ width: "900px", marginTop:"60px" }}>
          <Responsive arr={sec1}/>
        </div>
      </div>
      
      <div className="d-flex justify-content-center flex-column" style={{ marginTop:"60px"}}>
          <FeaturedSection />
        </div>
    </div>
  );
}

export default App;
