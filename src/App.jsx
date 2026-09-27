import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Team from './pages/Team';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import ScrollToTop from './components/sections/ScrollToTop';
import FloatingButtons from './components/sections/FloatingButtons';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <div className="min-h-screen bg-bg">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
               <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/portfolio" element={<Portfolio />} />
                 <Route path="/services" element={<Services />} />
                 <Route path="*" element={<Error />} />
            </Routes>
            <FloatingButtons />
          </main>
          <Footer />

        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;