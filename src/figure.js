import './css/keyboard.css'
const Figure = ({number, fun}) => {
    return <button onClick={()=>fun(number)}>{number}</button>;
};

export default Figure;
