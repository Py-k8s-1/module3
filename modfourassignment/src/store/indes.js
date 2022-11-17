import { createStore,applyMiddleware } from "redux";
import { combineReducers,compose } from "redux";
import currencyreducer from "../currency/reducer";
import createSagaMiddleware from 'redux-saga'
import rootSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware()
const enhancedComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    currency:currencyreducer
})
const Store = createStore(
    rootReducer,
    enhancedComposer(applyMiddleware(sagaMiddleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
sagaMiddleware.run(rootSagas)

export default Store