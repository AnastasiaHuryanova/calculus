import Figure from "./Figure";
import './Keyboard.css';

export default ({fun2}) => {
    const arr = [...Array(10).keys()];

    return (
        <div className="keys">
            {arr.map(x => (
                <Figure key={x} number={x} fun={fun2}/>
            ))}
        </div>
    )
}
