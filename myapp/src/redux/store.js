import { createStore , applyMiddleware, compose} from "redux";
import { CounterReducer } from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
import { Watcher } from "./sagas";

const sagaMiddleware = createSagaMiddleware();


export const store = createStore(CounterReducer, compose( applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

sagaMiddleware.run(Watcher)
console.log(store.getState());