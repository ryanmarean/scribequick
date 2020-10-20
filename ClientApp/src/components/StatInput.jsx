import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const StatInput = (props) => {

    const {keyword, keywordValue, maxValue, minValue, subtractPoints, addPoints, pointsRemain, updateStats} = props;

    const [value, setValue] = useState(keywordValue);

    // const checkMinMax = () => {
    //     if (value >= maxValue) {
    //         document.getElementById(keyword + "IncreaseButton").removeAttribute("color");
    //         document.getElementById(keyword + "IncreaseButton").setAttribute("disabled", "");
    //     }
    //     else if (value <= minValue) {
    //         document.getElementById(keyword + "DecreaseButton").removeAttribute("color");
    //         document.getElementById(keyword + "DecreaseButton").setAttribute("disabled", ""); 
    //     } else {
    //         document.getElementById(keyword + "IncreaseButton").removeAttribute("disabled", "");
    //         document.getElementById(keyword + "IncreaseButton").setAttribute("color", "primary");
    //         document.getElementById(keyword + "DecreaseButton").removeAttribute("disabled", "");
    //         document.getElementById(keyword + "DecreaseButton").setAttribute("color", "secondary");
    //     }
    // }

    // const checkMax = checkedElement => {
    //     if (value >= maxValue) {
    //         checkedElement.setAttribute("disabled", "");
    //     } else {
    //         checkedElement.removeAttribute("disabled");
    //     }
    // }

    // const checkMin = checkedElement => {
    //     if (value <= minValue) {
    //         checkedElement.setAttribute("disabled", "");
    //     } else {
    //         checkedElement.removeAttribute("disabled");
    //     }
    // }

    const increaseValue = () => {
        if (pointsRemain()) {
            if (value >= maxValue) {
                setValue(maxValue);
            } else { 
                setValue(parseInt(value) + 1)
                subtractPoints();
            }
        }
        // checkMinMax();
        updateStats(keyword, value);
    }

    const decreaseValue = () => {
        if (value <= minValue) {
            setValue(minValue);
        } else {
            setValue(parseInt(value) - 1);
            addPoints();
        }
        // checkMinMax();
        updateStats(keyword, value);
    }

    return (
        <div>
            <h4>Your Score:</h4>
            <h3>{value}</h3>
            <Button id={keyword + "IncreaseButton"} variant="contained" color="primary" disableElevation onClick={increaseValue}>+</Button>
            <Button id={keyword + "DecreaseButton"} variant="contained" color="secondary" disableElevation onClick={decreaseValue}>-</Button>
        </div>
    )
}

export default StatInput;