import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/navbar/Navbar';
// import { Modals } from './components/modal/ssdfsdf';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route exact path="/home" element={<Home />} />
        {/* <Route exact path="/modal" element={<Modals />} /> */}
        <Route exact path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
