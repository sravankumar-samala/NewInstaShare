import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom'
import {InstaShareContextProvider} from './context/instaShareContext'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <InstaShareContextProvider>
      <Router>
        <App />
      </Router>
    </InstaShareContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
