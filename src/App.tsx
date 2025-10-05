import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import BrowseByMandala from './pages/BrowseByMandala'
import BrowseByDeity from './pages/BrowseByDeity'
import BrowseByTheme from './pages/BrowseByTheme'
import DeityDetail from './pages/deity/DeityDetail'
import MandalaDetail from './pages/mandala/MandalaDetail'
import HymnDetail from './pages/mandala/HymnDetail'
import StoryReader from './pages/story/StoryReader'
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
          <Route path='/about' element={<About/>}/>
          <Route path='/browse/mandala' element={<BrowseByMandala/>}/>
          <Route path='/browse/mandala/:mandalaNumber' element={<MandalaDetail/>}/>
          <Route path='/browse/mandala/:mandalaNumber/hymn/:hymnNumber' element={<HymnDetail/>}/>
          <Route path='/browse/deity' element={<BrowseByDeity/>}/>
          <Route path='/browse/deity/:deityId' element={<DeityDetail/>}/>
          <Route path='/browse/theme' element={<BrowseByTheme/>}/>
          <Route path='/story/:storyId' element={<StoryReader/>}/>
        </Routes>
      </main>

      {/* Footer will be visible on all pages */}
      <Footer />
    </div>
  )
}

export default App
