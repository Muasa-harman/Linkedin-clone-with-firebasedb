import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feeds from './components/Feeds';
import Widgets from './components/Widgets';


function App() {
  return (
    <div className="app">
 <Header/>
 {/* body */}
 <div className='app_body'>
  <Sidebar/>
  <Feeds/>
  <Widgets/>
 </div>
 {/* sidebar */}
 {/* feed */}
 {/* widget */}
    </div>
  );
}

export default App;
