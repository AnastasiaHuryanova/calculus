import Operator from "./Operator";

export default ({setOperator}) => {
    const operators = ["+", "-", "*", "/"];

    return (
        <>
            {operators.map((x, index) => (
                <Operator key={index} operator={x} setOperator={setOperator}/>
            ))}
        </>
    )
}
