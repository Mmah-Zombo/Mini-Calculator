import React from 'react'
import '../assets/styles.css'
import Screen from './Screen' 
import Button from './Button'
import { useState } from 'react'

function CalcBody() {
    const [value, setValue] = useState("");

    const clear = () => {
        setValue("");
    }

    const enter = () => {
        if (value !== "Invalid Syntax") {
            let result;
            let digits = value;
            let zeros = 0;
            while (zeros < value.length && digits[zeros] === "0") {
                zeros++;
            }
            digits = value.slice(zeros);
            try {
                result = eval(digits);
            }
            catch {
                result = "Invalid Syntax";
            }
    
            setValue(result.toString());
        }
    }

    const del = () => {
        if (value !== "Invalid Syntax") {
            let digits = value.slice(0, -1)
            setValue(digits)
        }
    }

    const putNum = (number) => {
        if (value !== "Invalid Syntax") {
            setValue(value + number)
        }
    }

    const add = () => {
        if (value !== "Invalid Syntax") {
            setValue(value + "+");
        }
    }

    const subtract = () => {
        if (value !== "Invalid Syntax") {
            setValue(value + "-");
        }
    }

    const multiply = () => {
        if (value !== "Invalid Syntax") {
            setValue(value + "*" );
        }
    }

    const divide = () => {
        if (value !== "Invalid Syntax") {
            setValue(value + "/");
        }
    }

    // Dynamically generate buttons
    const buttons = [];
    for (let i = 9; i >= 0; i--) {
        if (i >= 10) {
            buttons.push(<Button key={i} num={"operator"} />)
            continue
        }
        else {
            buttons.push(<Button num={i} func={() => {putNum(i)}} />);
        }
    }

  return (
    <>
        <div className="main">
            <Screen value={value} />
            <div className="btn-box">
                <Button num={"+"} func={add} />
                <Button num={"-"} func={subtract} />
                <Button num={"x"} func={multiply} />
                <Button num={"/"} func={divide}/>
                {buttons}
                <Button num={"Enter"} func={enter}/>
                <Button num={"Delete"} func={del}/>
                <Button num={"Clear"} func={clear} />
            </div>
        </div>

        <div className="info">
            Press the 'Clear' button when you get an "Invalid Syntax" message!
        </div>
    </>
  )
}

export default CalcBody