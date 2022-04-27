import { useDispatch, useSelector } from "react-redux"
import {getPro} from "../redux/action"

export function Mall ( ) {

    const dispatch = useDispatch();
    const products = useSelector( store => store.data);
    
    return (
        <div>
           <button onClick={ () => {
               dispatch(getPro)
           }}>Get PRoducts</button>
           {console.log(products)}
           {products.map( (item) => {
               return (
               <div key={item.id}>
                   <h1>{item.title}</h1>
                   <img src={item.image}/>
               </div>
               )
           })}
        </div>
    )
}