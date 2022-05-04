import logo from './logo.svg';
import './scss/global.scss';
import Palette from './Palette';
import BackgroundGlobe from './BackgroundGlobe';
import Grid from './Grid';
import Clients from './Clients';
import HowWeThink from './components/HowWeThink';
import Contact from './components/Contact';
import TypeWriter from './components/TypeWriter';

function App() {

  return (
    <div className="App">
      <header className="s-header">
        <p className="s-header-stark" onMouseOver={() => console.log('stark')}>Stark</p>
        <p className="s-header-minds">Minds</p>
        <BackgroundGlobe />
      </header>
      <div className="s-section-we-are section">
        <div className="s-section-we-are-header">
            WE ARE
        </div>
        <TypeWriter />
        <div className="s-section-we-are-titles-imporant">Innovators.</div>
      </div>
      <div className="how-did-we-get-here section-spacer">...So how did we get here?</div>
      <Grid />
      <Clients />
      <HowWeThink />
      <Contact />
    </div>
  );
}

export default App;