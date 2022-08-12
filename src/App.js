import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar.js';
import MainMint from './MainMint.js';
import About from './About.js';
import Team from './Team.js';
import NoPage from './NoPage.js';


function App() {
  const [accounts, setAccounts] = useState ([]);
  return (
    <div className='overlay'>
      <div className='App'>
        <Router>
          <NavBar accounts={accounts} setAccounts={setAccounts} />
          <Routes>
            <Route path = '/' element = {<MainMint accounts={accounts} setAccounts={setAccounts} />} />
            <Route path = '/about' element = {<About />} />
            <Route path = '/team' element = {<Team />} />
            <Route path = '/*' element = {<NoPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
