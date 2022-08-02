import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import counter from './store/reducers/counter'
import results from './store/reducers/results'
import './index.css'
import App from './App.js'

const rootReducer = combineReducers({
    counter: counter,
    results: results
})

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Provider store={ store }><App /></Provider>)
