import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/scss/bootstrap.scss'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import calendarReducer from './store/reducers/calendarReducer'
import rootSaga from './sagas/calendar'
/*
    Make entry of new reducers here
*/
const rootReducers = combineReducers({
  calendar: calendarReducer,
})

/*
  Making Saga objects
*/

const sagaMiddleWear = createSagaMiddleware()

/*
Applying middlware in order to use redux-saga because we want
to hold the update operation to the redux store until our
async all response arrived
*/

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(sagaMiddleWear)))
sagaMiddleWear.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
