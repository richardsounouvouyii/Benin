
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AppRoutes from './router/AppRoutes'

function App() {

  return (
    <>
      <Navbar />

      <main className="p-0">
        <AppRoutes />
      </main>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
