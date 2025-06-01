import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ToastContainer theme='light' position="top-right" autoClose={2000} hideProgressBar={false} closeOnClick pauseOnHover={false} draggable pauseOnFocusLoss />
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
