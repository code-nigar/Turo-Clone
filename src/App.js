import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav/MyNav';
import SimpleSlider from './components/Slider/Slider';
import CardOverlay from './components/CardOverlay/CardOverlay';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <CardOverlay/>
      <h1>Find your drive</h1>
      <h4>Explore the world's largest car sharing market place</h4>
      <div>
        <p>Browse by make</p>
        
      </div>
    </div>
  );
}

export default App;
