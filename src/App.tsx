import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PageTransition from './components/PageTransition'
import SideSocial from './components/SideSocial'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <SideSocial />
      <Navbar />
      <main className="container content">
        <AnimatedRoutes />
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
