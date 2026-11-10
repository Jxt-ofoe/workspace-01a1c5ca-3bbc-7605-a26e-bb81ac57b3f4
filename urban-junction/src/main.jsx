import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// The single-file offline build (npm run build:single) uses hash routing so it
// works from file:// and sandboxed iframes; the normal app uses clean URLs.
const Router = import.meta.env.VITE_SINGLE_FILE === 'true' ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
