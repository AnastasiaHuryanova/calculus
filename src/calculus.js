import { useState } from 'react';
import Display from './display';
import Title from './title'
import Keyboard from './keyboard';
import Operators from './operators';
import Result from './result';
import './css/keyboard.css';
import numberTostring from './utility';
import Clear from './clear';

const Calculus = () => {
const [value,setValue] = useState(0);
const [operator, setOperator] = useState("");
//const [handleOperator, setHandleOperator] = useState("");
const [valueTwo, setValueTwo] = useState(0);
const [displayValue, setDisplayValue] = useState(0);
const [result, setResult] =  useState(false);
  
function handleSecondValue(n) {
    //let temp = numberTostring(value) + numberTostring(n);
    //console.log(numberTostring(value) + numberTostring(n))
    if (operator !== "") {
        let temp= (numberTostring(valueTwo) + numberTostring(n));
        console.log(temp);
        setValueTwo(+temp);
        setDisplayValue(+temp);

    } else {
        let temp;
        if (result) {
            temp = +(n + "");
            setResult(false);
        } else {
            temp = +(numberTostring(value) + numberTostring(n));
        }
        console.log(temp);
        setValue(+temp);
        setDisplayValue(+temp);
    }
}

function handleClick() {
    if (operator === "+") {
        //console.log(value,valueTwo,typeof(value),typeof(valueTwo))
        setValue(value + valueTwo);
        setDisplayValue(value + valueTwo); 
    }  else if (operator === "-") {
        setValue(value - valueTwo);
        setDisplayValue(value - valueTwo);
    } else if (operator === "*") {
        setValue(value * valueTwo);
        setDisplayValue(value * valueTwo);
    } else if (operator === "/") {
        setValue(value / valueTwo);
    }
    setOperator("");
    setValueTwo(0);
    setResult(value);

} 

function clear() {
    setValue(0);
    setValueTwo(0);
    setOperator("");
    setDisplayValue(0);
}


    return (
        <div id="calculus">
        <Title id="name" text ="Calculus"></Title>
        <Display className="display" displayValue = {displayValue}></Display>
        <Keyboard className="keyboard" fun2 = {handleSecondValue}></Keyboard>
        <Operators className="operators" setOperator = {setOperator}></Operators>
        <Result className="result" getResult = {handleClick}></Result>
        <Clear className="clear" del = {clear}></Clear>
        </div>
    )
};

export default Calculus;