import './App.css';

import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


function App() {
  
  return (
    
    <div>
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>

    </div>
    
  );
}

export default App;
