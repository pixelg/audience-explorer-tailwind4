import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppDashboard } from "@/AppDashboard.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppDashboard />
  </StrictMode>,
)
