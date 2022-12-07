import Carousel from 'react-bootstrap/Carousel';
import ModalDialog from '../Body/Intro/ModalDialog';
import PatentHome from '../Body/PatentHome';
import GoToTopButton from '../Body/Patents/Years/GoToTopButton';
import Teamwork from '../Body/Teamwork';
import WWD from '../Body/WWD';
function Home(){
    return(
        <>
           <Carousel fade interval={1000}>
                <Carousel.Item>
                        <img height={740}
                            className="d-block w-100"
                            src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Home.Carousel.1.PNG"
                            alt="First slide"
                        />
                        <Carousel.Caption className='mb-5'>
                            <h1 className='Carouselh1'>Welcome to Cellix Bio</h1>
                            <p className='Carouselp'>The Company that never stops Innovating and Inventing</p>
                        </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                        <img height={740}
                            className="d-block w-100"
                            src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Home.Carousel.2.PNG"
                            alt="First slide"
                        />
                        <Carousel.Caption className='mb-5'>
                            <h1 className='Carouselh1'>Cellix Bio's patents filed between 2009 and 2022</h1>
                            <p className='Carouselp'>Access WIPO No's, Formulas, Claims, Diseases and Compounds Year wise here</p>
                        </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                        <img height={740}
                            className="d-block w-100"
                            src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Home.Carousel.3.png"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h1 className='Carouselh1'>Synergix AI<sup>TM</sup> powered technology</h1>
                            <p className='Carouselp'>Our Al-driven analysis of large datasets has potential to transform the classic R&D pipeline into new ways of more precise target selection Hospital and accelerating multiple stages of development</p>
                        </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                        <img height={740}
                            className="d-block w-100"
                            src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Home.Carousel.4.PNG"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1 className='Carouselh1'>Harnessing the data</h1>
                            <p className='Carouselp'>
                            Synergix AI<sup>TM</sup> is pioneering a transformative new big data approach to discovery and development of treatments provides more effective precision treatments for individuals as well as a reduction in costs to our healthcare systems
                            </p>
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <WWD></WWD>
            <PatentHome></PatentHome>
            <Teamwork></Teamwork>
            <ModalDialog/>
            <GoToTopButton></GoToTopButton>
        </>
    )
}
export default Home;