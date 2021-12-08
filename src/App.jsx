import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import NavbarRouter from './Router/NavbarRouter';
import "./Style/index.css"

function App() {

  return (
      <BrowserRouter>
        <NavbarRouter/>
      </BrowserRouter>
  );
}

export default App
