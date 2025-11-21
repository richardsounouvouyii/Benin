import { Routes, Route, Navigate } from 'react-router-dom'
import Accueil from '../pages/Accueil'
import Contact from '../pages/Contact'
import Destinations from '../pages/Destinations'
import Reservation from '../pages/Reservation'
import Events from '../pages/Events'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
