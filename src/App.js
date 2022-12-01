import logo from './logo.svg';
import './App.css';
import MyNav from './components/MyNav/MyNav';
import Responsive from './components/Slider/Slider';
import CardOverlay from './components/CardOverlay/CardOverlay';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <MyNav/>
      <CardOverlay/>
      <h1 className="display-1 mt-4">Find your drive</h1>
      <h4>Explore the world's largest car sharing market place</h4>
      <div className='d-flex justify-content-center'>
        <div className='text-start' style={{width: "900px"}}>
        <p>Browse by make</p>
        <Responsive/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
