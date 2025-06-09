import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import JoinUs from './pages/JoinUs';

import Contributers from './pages/Contributors';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main landing page route */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/contributors" element={<Contributers />} />

        {/* Add more routes as needed */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
