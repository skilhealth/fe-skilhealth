import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import UserProvider from './context/user-provider.jsx'
import InstansiProvider from './context/instansi-provider.jsx'
import ForumProvider from './context/forum-provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <ForumProvider>
    <UserProvider>
      <InstansiProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </InstansiProvider>
    </UserProvider>
  </ForumProvider>

  //</React.StrictMode>,
)
