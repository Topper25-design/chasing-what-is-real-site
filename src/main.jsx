import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './styles/globals.css'
import { initGA, trackPageView } from './utils/analytics'
import Home from './pages/index'
import About from './pages/about'
import Services from './pages/services'
import Portfolio from './pages/portfolio'
import Blog from './pages/blog'
import FreshwaterFishingExpedition2025 from './pages/blog/freshwater-fishing-expedition-2025'
import Contact from './pages/contact'

// Initialize Google Analytics
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || ''

// Component to track page views on route changes
const PageTracker = () => {
  const location = useLocation()

  useEffect(() => {
    initGA(GA_MEASUREMENT_ID)
  }, [])

  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location])

  return null
}

const App = () => {
  return (
    <BrowserRouter>
      <PageTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/freshwater-fishing-expedition-2025"
          element={<FreshwaterFishingExpedition2025 />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

