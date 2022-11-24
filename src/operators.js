import Operator from "./operator";
const Operators = ({setOperator}) => {
    const operators = ["+","-","*","/"];
    
    return (
        <>{operators.map((x, index)=> <Operator key={index} operator={x} setOperator={setOperator}></Operator>)}</>
    )
};

export default Operators;