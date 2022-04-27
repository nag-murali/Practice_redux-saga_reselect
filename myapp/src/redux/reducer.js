const initialState = {
    counter: 0,
    data : []
}

export function CounterReducer (store = initialState, action) {
   console.log("line 6")
    switch(action.type){

        case "INC_COUNT_SAGA":
            return {...store, counter: store.counter + 1}

        case "DEC_COUNT":
            console.log("dec")
            return {...store, counter: store.counter - 1}
        case "SHOW" :
            console.log("in show")
            return {...store, data: action.payload}    
        
        default:
           
            return store    
    }
}