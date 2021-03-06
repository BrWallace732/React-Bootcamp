import {useState} from 'react'
import ReactDOM from 'react-dom'
import "./App.css"

const WarningNoteUsed = () => {
    return <h1>Todavia no se ha usado el contador</h1>
}

const ListOfClicks = ({ clicks }) => {
    console.log({clicks})
    return <p>{clicks.join(", ")} </p>
}

const App = () => {
// const [left, setLeft] = useState(0)
// const [right, setRight] = useState(0)

const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    mensaje: "Mensaje en el estado"
})
const [clicks, setClicks] = useState([]);

const handeleClickLeft = () => {
    const newCounterState = {
    ...counters,
    left: counters.left + 1
    };
    setCounters(newCounterState)
    setClicks((prevClicks) => [...prevClicks, "L"])

}

const handleClickRight = () =>{
    setCounters({
        ...counters,
        right: counters.right + 1
    })
    setClicks((prevClicks) => [...prevClicks, "R"])
}



return (
    <div>
        {counters.left}
        <button onClick={handeleClickLeft} >left</button>
        <button onClick={handleClickRight} >right</button>
        {counters.right}
        <p>Clicks totales: {clicks.length} </p>
        {clicks.right === 0 ? (
            <WarningNoteUsed />
        ) : (
            <ListOfClicks clicks={clicks} />
        )}
    </div>
)

}



const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)