import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StoreBoundary from './store/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreBoundary>
      <App />
    </StoreBoundary>
  </StrictMode>

)
