import React from 'react';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import PageNotFound from './pages/error/PageNotFound';

import './assets/scss/styles-global.scss';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
