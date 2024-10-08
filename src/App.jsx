
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
// import SignUp from './pages/SignUp/SignUp.jsx';
import Login from './pages/login/login.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/signup' element={<SignUp />} /> */}
      </Routes>
    </Router>
  );
}


export default App;
