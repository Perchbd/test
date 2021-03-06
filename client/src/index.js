import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import axios from 'axios'

const store = createStore(reducer)

axios.get('http://localhost:3001');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
