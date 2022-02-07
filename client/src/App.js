import './App.css';
import { Routes, Route } from 'react-router-dom'
// import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './screens/Home/Home';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';
import Projects from './screens/Projects/Projects'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
