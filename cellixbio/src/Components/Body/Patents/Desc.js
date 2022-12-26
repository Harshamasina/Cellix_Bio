// import Carousel from 'react-bootstrap/Carousel';

function Desc(){
    return(
        <>
            {/* <div className='Desc'>
                <div>
                    <Carousel fade interval={2000}>
                    <Carousel.Item className='home_div'>
                            <img height={500}
                            className="d-block w-100"
                            src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/particles+green.PNG"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className='carouseltextcont'>
                                    <h1 className='PCarouselh1'>INVENTIONS</h1>
                                    <p className='PCarouselp'>Under Mr. Mahesh Kandula's direction We have created world-class medications that are powerful and effective.</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item className='home_div'>
                            <img height={500}
                            className="d-block w-100"
                            src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Plant.jpg"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                                <div className='carouseltextcont'>
                                    <h1 className='PCarouselh1'>U.S PATENT'S PORTFOLIO</h1>
                                    <ul className='PCarouselul'>
                                        <li className='liCarouselp'><span>GLOBAL PATENTS: </span>640</li>
                                        <li className='liCarouselp'><span>ISSUED U.S. PATENTS: </span>112</li>
                                        <li className='liCarouselp'><span>PENDING U.S. PATENETS: </span>28</li>
                                    </ul>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='home_div'>
                            <img height={500}
                            className="d-block w-100"
                            src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Brain.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                                <div className='carouseltextcont'>
                                    <h1 className='PCarouselh1'>GLOBAL PATENT'S PORTFOLIO</h1>
                                    <p className='PCarouselp'>View the patents that were issued between 2009 and 2022 by scrolling down.</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className='DescContainerh3'><span></span>
                <span className="WWDh3">PATENT PORTFOLIO</span><span></span>
                </div>
                <div className='DescpContainerp'>
                    <p className='Descp'>Cellix Bio has over 400 international patents in its portfolio. The Company has 63 Composition of Matter Allowed / Issued US Patents and 28 US Patent Pending Applications from the US Patent & Trademark Office in various therapeutic areas. We are also committed to safeguarding our intellectual property estate, which includes patent rights and trade secrets, as well as the potential commercial and clinical benefits that this safeguard provides for our proprietary technology.</p>
                </div>
            </div> */}

<div className='patentlandingpage'>
              <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Virus.mp4" autoPlay muted loop className='patents_video_bg' type="video/mp4"/>
                {/* <div className='bg-overlay'></div> */}
                    <div className='patents-text'>
                            <div className='patents_text_1'>
                                <h1 className='patentsCarouselh1'>INVENTIONS</h1>
                            </div>
                            
                            <div className='patents_text_2'>
                                <h1 className='patentsCarouselh1'>GLOBAL PATENT'S PORTFOLIO</h1>
                            </div>      
                     </div>
                    
             </div>
        </>
    );
}
export default Desc;