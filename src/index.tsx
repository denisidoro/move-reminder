import React from 'react'
import ReactDOM from 'react-dom'
import './bootstrap/index.css'
import App from './App'
import reportWebVitals from './bootstrap/reportWebVitals'

console.clear()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
