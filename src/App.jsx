// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Books from './pages/Books';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md p-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link to="/" className="text-blue-600 hover:text-blue-800 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-600 hover:text-blue-800 transition">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-blue-600 hover:text-blue-800 transition">Contact</Link>
          </li>
           <li>
            <Link to="/books" className="text-blue-600 hover:text-blue-800 transition">Books</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
