import { Helmet } from "react-helmet";

const Mahesh = () => {
    return(
        <div>
            <Helmet>
                <title>Mahesh Kandula | Cellix Bio</title>
                <meta name="description" content="Mahesh Kandula"/>
                <meta name="keywords" content="Board of Members and directors of Cellix Bio, cellix bio Founder CEO, COO and Scientific Team and Advisors, 
                    Avaca CEO, COO and Scientific Team and Advisors , cellix bio pharma Founder CEO, COO and Scientific Team and Advisors, 
                    Mahesh Kandula," 
                />
            </Helmet>
            <div className='patentlandingpage'>
                <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Board.mp4" autoPlay muted loop playsInline className='patents_video_bg' type="video/mp4"/>
                <div className='pipeline-text'>
                    <div className='patents_text_1'>
                        <h1 className='pipelineCarouselh1'>Mahesh Kandula</h1>
                    </div>
                </div>
            </div>
            <div className="LeaderContainerPage">
                <img className="LeaderImgPage" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Cellix+Mahesh+Kandula+-+1.jpg" alt="leader"></img>
                <div className="LeaderContentPage">
                    <h1>MAHESH KANDULA</h1>
                    <h2>FOUNDER</h2>
                    <p>Mahesh brings over 18 years of scientific and entrepreneurial experience in the life science industry. Mr. Kandula has been named an inventor on 180+ United States Patents and Applications and, more than 640+ International Patent Applications. Mr. Kandula received his Master of Technology degree from IIT Kharagpur.</p>
                </div>
            </div>
        </div>
    );
}
export default Mahesh;