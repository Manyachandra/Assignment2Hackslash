import './App.css';
import React from 'react';
import MyNav from './components/navbar';
import Content from './components/content'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>  
      <div className='Nav'>
      <MyNav/>
      </div>
      <div className='Bod'> 
      <Content/>
      </div>
    </div>
  );
}

export default App;
