import React, { useState } from "react";

function Button({variant,onButtonClick}){
   
    if(variant==='contained')
    return(
   
        <button id="applyButton" onClick={onButtonClick}>Apply</button>
      
    )
    else{
        return(
            
            <button id="cancelButton">Cancel</button>
           
        )
    }
}

export default Button;

