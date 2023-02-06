import InventorYears from "./Inventor/InventorYears";
import InventorIP from "./Inventor/InventorIP";
import NoInternetConn from '../Body/NoInternetConn';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

function Inventor() {

  return (
    <>
            <Helmet>
                <title>Inventor | Cellix Bio</title>
                <meta name="description" content="Mahesh Kandula Founder and CEO of Cellix Bio"/>
                <meta name="keywords" content="
                Mahesh Kandula, 
                cellix bio Founder, Inventor, MD, CEO, 
                Avaca Pharma MD CEO , 
                cellix bio pharma MD CEO. 
                Mahesh Kandula year wise patents portfolio,
                mahesh kandula US Patent Portfolio" 
                />
            </Helmet>
        <div className='patentlandingpage'>
            <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Neurons.mp4" autoPlay muted loop playsInline className='patents_video_bg' type="video/mp4"/>
            <div className='pipeline-text'>
              <div className='patents_text_1'>
                <h1 className='pipelineCarouselh1'>INVENTOR</h1>
              </div>
            </div>
        </div>
                {/* <div class="wrapper">
                  <div class="team">
                    <div class="team_member1">
                        <div class="team_img">
                            <img class="team-img" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Cellix+Mahesh+Kandula+-+1.jpg" alt="Team_image"></img>
                        </div>
                        <h3 class="team-lead-h3">Mahesh Kandula</h3>
                        <h5 class="role">Inventor</h5>
                        <p>Mahesh brings over 18 years of scientific and entrepreneurial experience in the life science industry. Mr. Kandula has been named an inventor on 180+ United States Patents and Applications and, more than 640+ International Patent Applications. Mr. Kandula received his Master of Technology degree from IIT Kharagpur.</p>
                    </div>
                </div>
            </div> */}
            <div className="InventorContainer">
              <div className="TeamMember1">
                  <Link to='/mahesh_k'><img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Cellix+Mahesh+Kandula+-+1.jpg" alt="Leaders"></img></Link>
                  <Link to='/mahesh_k'><h2>Mahesh Kandula</h2></Link>
                  <h3>INVENTOR</h3>
              </div>
            </div>
            <NoInternetConn>
              <InventorYears></InventorYears>
              <InventorIP></InventorIP>
            </NoInternetConn>
    </>
  );
}

export default Inventor;