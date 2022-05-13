import React, { useState, useContext } from 'react';
import { PuzzleContext } from '../../../contexts/PuzzleContext';
import variables from "../../../scss/_exports.module.scss";
import Canvas from './Canvas';
import Bomb from './Bomb';
import DrawingLogo from './DrawingLogo';


function Puzzle() {
    const [activeClick, setActiveClick] = useState(0);
    const [blowUp, setBlowUp] = useState(false);
    const { setCompletedPuzzle } = useContext(PuzzleContext);
    const determineClick = (num) => {
        console.log('determineClick', num);
        if (activeClick < 8) {
            if ((num - activeClick !== 1) && (num - activeClick !== 0)) {
                // must click next dot in list
                blowItUp();
            } else {
                setActiveClick(num);
            }
        } 
        if (activeClick === 7 && num === 8) {
            console.log('puzzle complete');
            setCompletedPuzzle(true);
        }
    }

    const blowItUp = () => {
        setBlowUp(true);
        setActiveClick(0);

        setTimeout(() => {
            setBlowUp(false);
        }, 1500);
    }


    return (
        <div className="drawing-canvas">
            <div style={{ zIndex: `${activeClick > 7 ? '2': '1'}`}} className="canvas-container">
                <Canvas />
            </div>
            <div style={{ zIndex: `${blowUp ? '3': '1'}`}} className="bomb-container">
                <Bomb blowUp={blowUp}/>
            </div>
            <div className="drawing-logo-container" style={{backgroundColor: `${blowUp ? variables['stark-red']: 'transparent'}`, zIndex: `${activeClick > 7 ? '1': '2'}`}}>
                <DrawingLogo blowUp={blowUp} activeClick={activeClick} determineClick={determineClick} />
            </div>
        </div>
    )
}

export default Puzzle;