import './scss/global.scss';
import BackgroundGlobe from './BackgroundGlobe';
import Grid from './Grid';
import Clients from './Clients';
import HowWeThink from './components/HowWeThink';
import Contact from './components/Contact';
import Animation from './components/Animation';
import WeAre from './components/WeAre';
import Minds from './components/Minds';

function App() {
  return (
    <div className="App">
      <header className="s-header">
        <BackgroundGlobe />
        <Animation />
        <h1>Stark Minds</h1>
        <h3>CONNECTING THE DOTS</h3>
      </header>
      <div className="s-header-stark">Stark</div>
      <Minds />
      <WeAre />
      <div className="how-did-we-get-here section-spacer">...So how did we get here?</div>
      <Grid />
      <Clients />
      <HowWeThink />
      <Contact />
    </div>
  );
}

export default App;