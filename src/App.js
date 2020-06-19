import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {$, jQuery} from 'jquery';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './resumeData.json';

function App() {

  // const loadData = () => JSON.parse(JSON.stringify(resumeData));
  const data = JSON.parse(JSON.stringify(resumeData));
  console.log(data)

  return (
    <div className="App">
      <Header data={data.main}/>
      <About data={data.main}/>
      <Portfolio data={data.portfolio} />
      <Contact data={data.main}/>
      <Footer data={data.main}/>
    </div>
  );
}

export default App;
