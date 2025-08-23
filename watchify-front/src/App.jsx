import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Home from './pages/shared/Home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import WatchShop from './pages/shared/WatchShop/WatchShop';

function App() {

  return (
   <main>
     <Toaster position="top-right" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/watch-shop" element={<WatchShop />} />
        </Routes>
      </Router>
   </main>
  )
}

export default App
