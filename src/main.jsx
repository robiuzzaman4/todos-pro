import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

import './index.css'
import App from './App.jsx'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster/>
    </Provider>
  </React.StrictMode>,
)
