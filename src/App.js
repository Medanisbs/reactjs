import React from 'react'
import './App.css'
import Navigo from './Component/Navbar'
import Formulaire from './Component/Form'
import Carroussel from './Component/Carroussel';


function App() {
  return (
    <div className="App">
     <Navigo/>
     <Carroussel/>
     <Formulaire/> 
    </div>
  );
}

export default App;
