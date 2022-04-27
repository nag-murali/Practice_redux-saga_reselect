import {call, put, takeEvery} from "redux-saga/effects";
import { api } from "../utils/api";

export function* Watcher () {

    yield takeEvery( "INC_COUNT", incCount );
    yield takeEvery("GET_PRO", productsSaga);
}

function* productsSaga () {
   
    try{
     
    const data = yield call(api, "/products")
    
    yield put ({type: "SHOW", payload: data.data})    
}
    catch (error) {
       yield put({type: "SHOW", payload: error})
    }
}


function* incCount (){
    yield put ({type: "INC_COUNT_SAGA"})
}