import './scss/global.scss';
import BackgroundGlobe from './BackgroundGlobe';
import Grid from './Grid';
import Clients from './Clients';
import HowWeThink from './components/HowWeThink';
import Contact from './components/Contact';
import Animation from './components/Animation';
import WeAre from './components/WeAre';
import Minds from './components/Minds';
import TextLogoStark from './components/TextLogoStark';
import HowDidWeGetHere from './components/HowDidWeGetHere';

function App() {
  return (
    <div className="App">
      <header className="s-header">
        <BackgroundGlobe />
        <Animation />
        <h1>Stark Minds</h1>
        <h3>CONNECTING THE DOTS</h3>
      </header>
      <TextLogoStark />
      <Minds />
      <WeAre />
      <HowDidWeGetHere />
      <Grid />
      <Clients />
      <HowWeThink />
      <Contact />
    </div>
  );
}

export default App;