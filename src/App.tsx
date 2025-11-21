
import './App.css'
import Navbar from './components/Navbar'
import AppRoutes from './router/AppRoutes'

function App() {

  return (
    <>
      <Navbar />

      <main className="p-0">
        <AppRoutes />
      </main>
    </>
  )
}

export default App
