import React, { useState } from 'react';
import './style.css';

export const  Switch=({sizeOfSwitch, checkSwitchState})=> {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
        console.log(isOn)
        if (sizeOfSwitch === "small"){
            checkSwitchState(isOn)
        }
        
    };

    return (
        <div className={`switch ${sizeOfSwitch == "small" ? "switchSize" : "switch"} ${isOn ? 'switch-on' : ''}`} onClick={toggleSwitch}>
            <div className={`switch-slider ${sizeOfSwitch == "small" ? "smallSwitchSlider" : "switch-slider"}`}></div>
        </div>
    );
}


