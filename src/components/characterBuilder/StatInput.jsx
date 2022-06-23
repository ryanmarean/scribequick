import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';

const StatInput = (props) => {

    const {
        keyword, 
        keywordValue, 
        maxValue, 
        minValue, 
        subtractPoints, 
        addPoints, 
        pointsRemain, 
        updateStats
    } = props;

    const [value, setValue] = useState(keywordValue);
    const [isIncreaseDisabled, setIsIncreaseDisbled] = useState(false);
    const [isDecreaseDisabled, setIsDecreaseDisbled] = useState(true);

    useEffect(() => {
        if (value >= maxValue) {
            setIsIncreaseDisbled(true);
        } 
        else if (value <= minValue) {
            setIsDecreaseDisbled(true);
        } 
        else {
            setIsIncreaseDisbled(false);
            setIsDecreaseDisbled(false);
        }
    },[value]);

    useEffect(() => {
        updateStats(keyword, value)
    },[value]);

    const increaseValue = () => {
        if (pointsRemain()) {
            if (value >= maxValue) {
                setValue(maxValue);
            } else { 
                setValue(parseInt(value) + 1)
                subtractPoints();
            }
        }
    }

    const decreaseValue = () => {
        if (value <= minValue) {
            setValue(minValue);
        } else {
            setValue(parseInt(value) - 1);
            addPoints();
        }
    }

    return (
        <div>
            <h4>Your Score:</h4>
            <h3>{value}</h3>
            <Button
                className="IncreaseButton"
                variant="contained"
                color="primary"
                disableElevation
                disabled={isIncreaseDisabled}
                onClick={increaseValue}>
                <AddSharpIcon />
            </Button>
            <Button
                className="DecreaseButton"
                variant="contained"
                color="secondary"
                disableElevation
                disabled={isDecreaseDisabled}
                onClick={decreaseValue}>
                <RemoveSharpIcon />
            </Button>
        </div>
    )
}

export default StatInput;