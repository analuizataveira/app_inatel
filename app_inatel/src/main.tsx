import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { default as LoginForm, default as LoginPage } from './pages/LoginForm'
import Menu from './pages/Menu'
import DeadlinesList from './pages/DeadlinesList'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/deadline-list" element={<DeadlinesList />} />
        </Routes>
    </HashRouter>
  </StrictMode>,
)
