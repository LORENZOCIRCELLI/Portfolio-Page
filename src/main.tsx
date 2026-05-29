import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import CertificationsPage from './pages/CertificationsPage'
import ProjectsPage from './pages/ProjectsPage'
import './index.css'
import AppEn from './App-En'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/certifications" element={<CertificationsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/en" element={<AppEn />} />
    </Routes>
  </BrowserRouter>
)