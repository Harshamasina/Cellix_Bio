import Carousel from 'react-bootstrap/Carousel';
import ModalDialog from '../Body/Intro/ModalDialog';
import Teamwork from '../Body/Teamwork';
import WWD from '../Body/WWD';
function Home(){
    return(
        <div>
           <Carousel fade interval={3000}>
                <Carousel.Item>
                        <img height={720}
                            className="d-block w-100"
                            src="https://media.istockphoto.com/photos/abstract-futuristic-pills-wireframe-and-capsule-on-glowing-blue-picture-id1368548595?b=1&k=20&m=1368548595&s=170667a&w=0&h=AJM2XS03wmq7Nl8h5YCjXsnWtoWgaFooQXAttr1zrE4="
                            alt="First slide"
                        />
                        <Carousel.Caption className='mb-5'>
                            <h1 className='Carouselh1'>Welcome to Cellix Bio</h1>
                            <p className='Carouselp'>The Company that never stops Innovating and Inventing</p>
                        </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                        <img height={720}
                            className="d-block w-100"
                            src="https://www.kilburnstrode.com/KilburnStrode/media/KilburnStrodeMediaLibrary/Knowledge/ai-drug-discovery.png?ext=.png"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h1 className='Carouselh1'>Synergix AI<sup>TM</sup> powered technology</h1>
                            <p className='Carouselp'>Our Al-driven analysis of large datasets has potential to transform the classic R&D pipeline into new ways of more precise target selection Hospital and accelerating multiple stages of development</p>
                        </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                        <img height={720}
                            className="d-block w-100"
                            src="https://www.dcatvci.org/wp-content/uploads/2022/06/Chemicals_1500x750-1024x512.jpg"
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
            <a href='./Home' className='one-page-arrow'>
                    <img className="scroll" src='https://www.cellixbio.com/demos/business/images/mouse.svg' alt='mouse'></img></a>
            <WWD></WWD>
            <Teamwork></Teamwork>
            <ModalDialog/>
        </div>
    )
}

export default Home;