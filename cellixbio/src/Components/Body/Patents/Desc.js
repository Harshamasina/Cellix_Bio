import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Desc(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
        <>
            <div className='Desc'>
                <div>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img height={840}
                            className="d-block w-100"
                            src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Patents.Carousel.1.PNG"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                                <h2 className='PH2'>PATENTS UNDER CELLIX BIO</h2>
                                <p className='PP'>Under <b className='PP'>Mr. Mahesh Kandula's</b> direction We have created world-class medications that are powerful and effective.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <img height={840}
                            className="d-block w-100"
                            src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Patents.Carousel.2.PNG"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h2 className='PH2'>Number of U.S. patents that have been issued or are pending</h2>
                                <ul className='Carouselul'>
                                    <li><span>GLOBAL PATENTS: </span><b>432</b></li>
                                    <li><span>ISSUED U.S. PATENTS: </span><b>63</b></li>
                                    <li><span>PENDING U.S. PATENETS: </span><b>28</b></li>
                                </ul>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <img height={840}
                            className="d-block w-100"
                            src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Patents.Carousel.3.PNG"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h2 className='PH2'>List of patents that Cellix Bio issued each year on a global basis.</h2>
                            <p className='PP'>View the patents that were issued between 2009 and 2022 by scrolling down.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='DescContainerh3'>
                <h3 className='Desch3'>Patents Under Cellix Bio</h3>
                </div>
                <div className='DescpContainerp'>
                    <p className='Descp'>Cellix Bio has over 400 international patents in its portfolio. The Company has 63 Composition of Matter Allowed / Issued US Patents and 28 US Patent Pending Applications from the US Patent & Trademark Office in various therapeutic areas. We are also committed to safeguarding our intellectual property estate, which includes patent rights and trade secrets, as well as the potential commercial and clinical benefits that this safeguard provides for our proprietary technology.</p>
                </div>
            </div>
        </>
    );
}
export default Desc;