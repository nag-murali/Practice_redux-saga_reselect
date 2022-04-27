import { useDispatch, useSelector } from "react-redux"
import { incCount , decCount} from "../redux/action"

export function Counter ( ) {

    const dispatch = useDispatch();
    const count = useSelector( store => store.counter);
    
    return (
        <div>
            <h1>Counter : {count}</h1>
            <button  onClick={ () => {
                dispatch(incCount)
            }} >Inc</button>
            <button onClick={ () => {
                console.log("something")
                dispatch(decCount)
            }}> Dec</button>
        </div>
    )
}