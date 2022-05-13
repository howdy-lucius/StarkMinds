import Puzzle from './Puzzle';

function HowWeThinkSection() {
    return (
        <div className="section how-we-think">
            <div className="think-content">
                <h2>How We Think</h2>
                <p>
                    Outcomes over egos<br></br>
                    Take five deep breaths <br></br>
                    Measure Twice, Cut once <br></br>
                    Talk it out, hit the books <br></br>
                </p>
                <h2>Connect the dots</h2>
                <Puzzle />
                <p className="if-all-else">If all else fails:</p>
                <h2 className="blow-it-up-text">BLOW IT UP AND START OVER</h2>
            </div>
        </div>
    )
}

export default HowWeThinkSection;