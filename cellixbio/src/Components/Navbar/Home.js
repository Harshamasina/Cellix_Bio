// import Teamwork from '../Body/Teamwork';
import WWD from '../Body/WWD';
import { Link } from 'react-router-dom';
function Home(){
    document.title = 'Home - Cellix Bio';
    return(
        <>
            <div className='landingpage'>
              <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/DNA.mp4" autoPlay muted loop className='video-bg' type="video/mp4"/>
                {/* <div className='bg-overlay'></div> */}
                    <div className='home-text'>
                            <div>
                                <h1 className='Carouselh1'>Welcome to Cellix Bio</h1>
                                <p className='Carouselp'>The Company that never stops Innovating and Inventing</p>
                            </div>
                            
                            <div>
                                <h1 className='Carouselh1'>Synergix AI<sup>TM</sup> Powered Technology</h1>
                                <p className='Carouselp'>Our Al-driven analysis of large datasets has potential to transform the classic R&D pipeline into new ways of more precise target selection Hospital and accelerating multiple stages of development</p>
                            </div>
                            
                            <div>
                                <h1 className='Carouselh1'>Harnessing the Data</h1>
                                <p className='Carouselp'>Synergix AI<sup>TM</sup> is pioneering a transformative new big data approach to discovery and development of treatments provides more effective precision treatments for individuals as well as a reduction in costs to our healthcare systems</p>
                            </div>
                     </div>
                     {/* <div>
                        <span className='Carouselspan'>Access the Patents filed by Mahesh Kandula by clicking Below</span>
                    </div> */}
                    <Link className='homeBtn' to="/Patents">Get Started</Link>
             </div>
            <WWD></WWD>
            {/* <Teamwork></Teamwork> */}
        </>
    )
}
export default Home;