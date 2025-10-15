import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { AIChatbot } from './components/AIChatbot';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Beneficiaries } from './pages/Beneficiaries';
import { AddBeneficiary } from './pages/AddBeneficiary';
import { Projects } from './pages/Projects';
import { AIAnalysis } from './pages/AIAnalysis';
import { Analytics } from './pages/Analytics';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/beneficiaries" element={<Beneficiaries />} />
            <Route path="/add-beneficiary" element={<AddBeneficiary />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ai-analysis" element={<AIAnalysis />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
          <AIChatbot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
