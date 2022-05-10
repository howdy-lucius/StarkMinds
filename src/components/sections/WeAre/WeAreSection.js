import TypeWriterEffect from './TypeWriterEffect';
import Logo from './Logo';

function WeAreSection() {
    return(
        <div className="we-are section" id="we-are" >
            <Logo rate="1" top="0" left="10%" scale=".5" blur="10px" opacity=".03"/>
            <Logo rate="1.5" top="-40%" left="30%" scale=".5" blur="15px" opacity=".05"/>
            <Logo rate=".1" top="-20%" left="80%" scale="2" blur="5px" opacity=".07"/>
            <Logo rate=".05" right="-20%" scale="4" blur="2px" opacity=".07"/>
            <Logo rate=".01" top="50%" scale="6" right="35%" opacity=".07" blur="2px"/>
            <Logo rate="1.1" top="-10%" scale="2" right="30%" opacity=".04" blur="5px"/>
            <Logo rate=".7" top="0" scale="1" left="66%" opacity=".06" blur="3px"/>
            <Logo rate=".05" top="0" scale="6" left="10%" opacity=".1" blur="2px"/>
            <h2>
                WE ARE
            </h2>
            <TypeWriterEffect />
        </div>
        
    ) 
}

export default WeAreSection;