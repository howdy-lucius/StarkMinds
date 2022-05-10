import Canvas from './Canvas';
import Puzzle from './Puzzle';

function HowWeThinkSection() {
    return (
        <div className="section how-we-think">
            <h2>How We Think</h2>
            <p>
                Outcomes over egos<br></br>
                Take five deep breaths <br></br>
                Measure Twice, Cut once <br></br>
                Talk it out, hit the books <br></br>
            </p>
            <h3>Connect the dots</h3>
            <div className="drawing-canvas">
                <Puzzle />
            </div>
            <p className="if-all-else">If all else fails:</p>
            <p className="blow-it-up-text">BLOW IT UP AND START OVER</p>
        </div>
    )
}

export default HowWeThinkSection;