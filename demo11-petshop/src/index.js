import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.html'

import App from './components/app.js'

import { store } from './store/store.js'

console.log('store', store.getState())
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mount')
)





