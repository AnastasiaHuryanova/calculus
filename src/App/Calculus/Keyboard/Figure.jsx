import './Keyboard.css'

export default ({number, fun}) => (
    <button onClick={() => fun(number)}>
        {number}
    </button>
)
