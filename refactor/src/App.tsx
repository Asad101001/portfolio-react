import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Background from './components/layout/Background';
import Overlays from './components/layout/Overlays';
import CertsDrawer from './components/layout/CertsDrawer';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProjectAwsPage from './pages/ProjectAwsPage';
import ProjectPrsPage from './pages/ProjectPrsPage';

function App() {
  const { theme, setTheme, rotateTheme } = useTheme();

  return (
    <Router>
      <div className="min-h-screen flex flex-col relative w-full overflow-hidden">
        {/* Dynamic Background and Overlays */}
        <Background />
        <Overlays />
        <CertsDrawer />

        <Navbar activeTheme={theme} setActiveTheme={setTheme} rotateTheme={rotateTheme} />
        
        <main id="main-content" className="flex-grow w-full relative z-10 m-0 p-0">
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
  );
}

export default App;
