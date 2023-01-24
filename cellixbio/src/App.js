import './App.css';
import NavBar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import React from 'react';
import GoToTopButton from './Components/Body/Patents/Years/GoToTopButton';
import { Helmet } from 'react-helmet';
{/* <Helmet>
  <title>Cellix Bio</title>
  <meta name="description" content="Cellix Bio's Informative Web Application for its Intellectual Property"/>
</Helmet> */}


function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
          <Helmet>
            <title>Cellix Bio</title>
            <meta name="description" content="Cellix Bio's Informative Web Application for its Intellectual Property"/>
          </Helmet>
          <NavBar></NavBar>
          <Footer></Footer>
        </BrowserRouter>
        <GoToTopButton></GoToTopButton>
    </div>
  );
}
export default App;
