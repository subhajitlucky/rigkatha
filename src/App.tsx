import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import BrowseByMandala from './pages/BrowseByMandala'
import BrowseByDeity from './pages/BrowseByDeity'
import BrowseByTheme from './pages/BrowseByTheme'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'

function App() {
  return (
    <div className="app-container min-h-screen flex flex-col">
      {/* Navbar will be visible on all pages */}
      <Navbar />
      
      {/* Page content - flex-grow to push footer down */}
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/browse/mandala' element={<BrowseByMandala/>}/>
          <Route path='/browse/deity' element={<BrowseByDeity/>}/>
          <Route path='/browse/theme' element={<BrowseByTheme/>}/>
        </Routes>
      </main>

      {/* Footer will be visible on all pages */}
      <Footer />
    </div>
  )
}

export default App
