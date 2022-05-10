import './scss/global.scss';
import GridSection from './components/sections/grid/GridSection';
import HowWeThinkSection from './components/sections/HowWeThink/HowWeThinkSection';
import ContactSection from './components/sections/contact/ContactSection';
import WeAreSection from './components/sections/WeAre/WeAreSection';
import StickyLogoMinds from './components/common/StickyLogoMinds';
import StickyLogoStark from './components/common/StickyLogoStark';
import HowDidWeGetHereSection from './components/sections/howDidWeGetHere/HowDidWeGetHereSection';
import HeaderSection from './components/sections/header/HeaderSection';
import ClientsSection from './components/sections/Clients/ClientsSection';
import MissionSection from './components/sections/Mission/MissionSection';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <div class="over-bleed">
        <StickyLogoStark />
        <StickyLogoMinds />
        <WeAreSection />
        <HowDidWeGetHereSection />
        <MissionSection />
        <GridSection />
        <ClientsSection />
        <HowWeThinkSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;