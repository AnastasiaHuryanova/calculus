import Figure from "./figure";
import './css/keyboard.css';
const Keyboard = ({fun2}) => {
    const arr = [...Array(10).keys()];

    return (
        <div className="keys">{arr.map(x=> <Figure key={x} number={x} fun={fun2}></Figure>)}</div>
    )
    
};

export default Keyboard;