import './App.css';
import NavBar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './Components/Footer/Footer';
import Footer1 from './Components/Footer/Footer1';
import React from 'react';
import GoToTopButton from './Components/Body/Patents/Years/GoToTopButton';
import { Helmet } from 'react-helmet';

function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
          <Helmet>
            <title>Cellix Bio</title>
            <meta name="description" content="Cellix Bio's Informative Web Application for its Intellectual Property" />
            <meta property="og:image" content="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/cellix+bio+meta+img.png" />
            <meta name='description' content='Cellix Bio Informative Web Application for its Patents and Infrastructure' />
            <meta name='keywords' content='Cellix Bio, AvacaPharma, Cellix Bio Pharma, Mahesh Kandula, Mahesh Kandula Patents, Cellix Bio Net Worth, Prism Science' />
          </Helmet>
          <NavBar></NavBar>
          {/* <Footer></Footer> */}
          <Footer1></Footer1>
        </BrowserRouter>
        <GoToTopButton></GoToTopButton>
    </div>
  );
}
export default App;
