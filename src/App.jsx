import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero'
import Card from './Card';
import data from './Data';


function App() {
  


  return (
    <div>
      <Navbar />
      <Hero />
      <Card data={data}/>
    </div>
  )
}

export default App
