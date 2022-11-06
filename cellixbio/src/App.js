import './App.css';
import NavBar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import React from 'react';
import ModalDialog from './Components/Body/Intro/ModalDialog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
      </BrowserRouter>
      <Footer></Footer>
      
    </div>
  );
}
export default App;
