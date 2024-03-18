import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MyRoutes } from './MyRoutes/myRoutes';
import "./styles/base.scss"

function App() {
  return (
    <BrowserRouter>
      <MyRoutes/>
    </BrowserRouter>
  );
}

export default App;
