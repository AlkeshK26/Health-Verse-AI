import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // <-- Ye Line Import Karo

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  {/* <-- App ko iske andar wrap karna zaroori hai */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)