import BackgroundGlobe from '../../common/BackgroundGlobe';
import Animation from './Animation';

function Header() {
  return (
      <header className="s-header">
        <BackgroundGlobe />
        <Animation />
        <h1>stark minds</h1>
        <h3>CONNECTING THE DOTS</h3>
      </header>
  );
}

export default Header;