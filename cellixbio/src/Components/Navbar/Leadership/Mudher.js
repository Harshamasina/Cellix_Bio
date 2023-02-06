import { Helmet } from "react-helmet";

const Mudher = () => {
    return(
        <div>
            <Helmet>
                <title>Mudher Albassam | Cellix Bio</title>
                <meta name="description" content="Mudher Albassam"/>
                <meta name="keywords" content="Board of Members and directors of Cellix Bio, cellix bio Founder CEO, COO and Scientific Team and Advisors, 
                    Avaca CEO, COO and Scientific Team and Advisors , cellix bio pharma Founder CEO, COO and Scientific Team and Advisors, 
                    Mudher Albassam," 
                />
            </Helmet>
            <div className='patentlandingpage'>
                <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Board.mp4" autoPlay muted loop playsInline className='patents_video_bg' type="video/mp4"/>
                <div className='pipeline-text'>
                    <div className='patents_text_1'>
                        <h1 className='pipelineCarouselh1'>Mudher Albassam</h1>
                    </div>
                </div>
            </div>
            <div className="LeaderContainerPage">
                <img className="LeaderImgPage" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.Mudher.PNG" alt="leader"></img>
                <div className="LeaderContentPage">
                    <h1>Dr. Mudher Albassam</h1>
                    <h2>PRE-CLINICAL DEVELOPMENT</h2>
                    <p>Dr. Mudher Albassam has extensive experience in nonclinical development, pathology, nonclinical safety/risk assessment and toxicology. He was a Principal Director and Senior Director in Toxicology & Pathology at Roche Pharmaceuticals. He obtained his PhD on Veterinary Pathology from Purdue University and MS in Veterinary Pathology from the University of Guelph.</p>
                </div>
            </div>
        </div>
    );
}
export default Mudher;