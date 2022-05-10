import './scss/global.scss';
import Grid from './components/sections/grid/Grid';
import HowWeThink from './components/sections/HowWeThink/HowWeThink';
import Contact from './components/sections/contact/Contact';
import WeAre from './components/sections/WeAre/WeAre';
import Minds from './components/Minds';
import TextLogoStark from './components/TextLogoStark';
import HowDidWeGetHere from './components/sections/howDidWeGetHere/HowDidWeGetHere';
import Header from './components/sections/header/Header';
import Clients from './components/sections/Clients/Clients';
import Mission from './components/sections/Mission/Mission';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="over-bleed">
        <TextLogoStark />
        <Minds />
        <WeAre />
        <HowDidWeGetHere />
        <Mission />
        <Grid />
        <Clients />
        <HowWeThink />
        <Contact />
      </div>
    </div>
  );
}

export default App;