import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Profile from './components/pages/Profile/Profile'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div className='content'>          
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile/:login' element={<Profile/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
