import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Students from './pages/Students';

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Sidebar />
        <div className="app-main">
          <HeaderComponent
            title="Student Info App"
            subtitle="Republic of the Philippines • University of Cabuyao"
          />
          <main className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/students" element={<Students />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
