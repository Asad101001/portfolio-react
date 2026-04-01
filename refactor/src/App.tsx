import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layout Components (To be implemented)
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Overlays from './components/layout/Overlays'

// Pages
import HomePage from './pages/HomePage'
import ProjectAwsPage from './pages/ProjectAwsPage'
import ProjectPrsPage from './pages/ProjectPrsPage'

function App() {
  const [theme, setTheme] = useState('cyberpunk')

  useEffect(() => {
    // Apply theme class to body
    document.body.className = `theme-${theme}`
  }, [theme])

  return (
    <Router>
      <div className="min-h-screen flex flex-col relative w-full overflow-hidden">
        {/* Ambient Glows and Grid Backgrounds */}
        <Overlays theme={theme} />

        <Navbar activeTheme={theme} setActiveTheme={setTheme} />
        
        <main id="main-content" className="flex-grow w-full max-w-[1000px] mx-auto px-5 py-10 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/aws" element={<ProjectAwsPage />} />
            <Route path="/projects/prs" element={<ProjectPrsPage />} />
            {/* Catch-all 404 */}
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h1 className="text-4xl font-bold font-mono text-customCyan">404 - SECTOR OFFLINE</h1>
                <p className="mt-4 text-customTextMuted">The requested trajectory does not exist.</p>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
