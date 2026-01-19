import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Button from './components/button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button type="primary">Primary Button</Button>
    <Button type="danger">Danger Button</Button>
    <Button type="success">Success Button</Button>
  </StrictMode>
)
