const Operator = ({operator, setOperator}) => {
    return <button onClick={()=>setOperator(operator)}>{operator}</button>;
};

export default Operator;
