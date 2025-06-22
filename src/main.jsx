import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../public/assets/front/css/app.min.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
