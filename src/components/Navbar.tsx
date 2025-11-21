import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="bg-[#C20026] text-white w-full">
        <div className="h-20 w-full pl-32 pr-32 flex items-center justify-between">

          {/* Logo Left */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
          </div>

          {/* Links Right */}
          <div className="hidden md:flex items-center">
            <ul className="flex gap-12 items-center text-lg">
              <li>
                <NavLink to="/" end className={({ isActive }) => `nav-link font-semibold leading-6 ${isActive ? 'active' : ''}`}>
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/destinations" className={({ isActive }) => `nav-link font-semibold leading-6 ${isActive ? 'active' : ''}`}>
                  Destinations populaires
                </NavLink>
              </li>
              <li>
                <NavLink to="/reservation" className={({ isActive }) => `nav-link font-semibold leading-6 ${isActive ? 'active' : ''}`}>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className={({ isActive }) => `nav-link font-semibold leading-6 ${isActive ? 'active' : ''}`}>
                  Événements à venir
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `nav-link font-semibold leading-6 ${isActive ? 'active' : ''}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  )
}
