import BackgroundGlobe from './BackgroundGlobe';
import USMap from './components/USMap';
import CAMap from './components/CAMap';
import ITMap from './components/ITMap';
import SOMap from './components/SOMap';

function Clients() {
    return (
        <div className="client-section section-spacer">
            <h2>Who We Work With</h2>
            <USMap />
            <CAMap />
            <div className="side-by-side">
                <ITMap />
                <SOMap />
            </div>
            <BackgroundGlobe />
        </div>
    )
}

export default Clients;