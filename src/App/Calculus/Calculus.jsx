import {useState} from 'react';
import Display from './Display';
import Title from './Title'
import Result from './Result';
import './Keyboard/Keyboard.css';
import Clear from './Clear';
import Keyboard from "./Keyboard/Keyboard";
import Operators from "./Operators/Operators";

const numberTostring = (digit) => digit.toString();

export default () => {
    const [value, setValue] = useState(0);
    const [operator, setOperator] = useState("");
//const [handleOperator, setHandleOperator] = useState("");
    const [valueTwo, setValueTwo] = useState(0);
    const [displayValue, setDisplayValue] = useState(0);
    const [result, setResult] = useState(false);

    const clear = () => {
        setValue(0);
        setValueTwo(0);
        setOperator("");
        setDisplayValue(0);
    }

    const handleSecondValue = (n) => {
        //let temp = numberTostring(value) + numberTostring(n);
        //console.log(numberTostring(value) + numberTostring(n))
        if (operator !== "") {
            let temp = (numberTostring(valueTwo) + numberTostring(n));
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

    const handleClick = () => {
        if (operator === "+") {
            //console.log(value,valueTwo,typeof(value),typeof(valueTwo))
            setValue(value + valueTwo);
            setDisplayValue(value + valueTwo);
        } else if (operator === "-") {
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

    return (
        <div id="calculus">
            <Title id="name" text="Keyboard"/>
            <Display className="display" displayValue={displayValue}/>
            <Keyboard className="keyboard" fun2={handleSecondValue}/>
            <Operators className="operators" setOperator={setOperator}/>
            <Result className="result" getResult={handleClick}/>
            <Clear className="clear" del={clear}/>
        </div>
    )
}
