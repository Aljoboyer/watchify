import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Home from './pages/shared/Home/Home';
import Login from './pages/auth/Login';

function App() {

  return (
   <main>
     <Toaster position="top-right" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
   </main>
  )
}

export default App
