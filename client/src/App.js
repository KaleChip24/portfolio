import './App.css';
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './screens/Home/Home';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Routes>
        <Route path="/" element={null} />
        <Route path="/projects" element={null} />
        <Route path="/about" element={null} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
