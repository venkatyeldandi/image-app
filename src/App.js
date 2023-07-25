import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import './App.css';
import LoadingPage from './LoadingPage';
import LoginPage from './Loginpage';
import CreateAccountPage from './CreateAccountPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoadingPage/>}/>
        <Route exact path='/Login' element={<LoginPage/>}/>
        <Route exact path='/CreateAccount' element={<CreateAccountPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
