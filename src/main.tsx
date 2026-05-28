import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import CertificationsPage from './pages/CertificationsPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/certifications" element={<CertificationsPage />} />
    </Routes>
  </BrowserRouter>
)