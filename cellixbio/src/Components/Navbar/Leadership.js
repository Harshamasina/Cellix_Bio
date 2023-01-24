import { Helmet } from "react-helmet";

function Leadership(){

    return(
      <>
        <Helmet>
            <title>Leadership | Cellix Bio</title>
            <meta name="description" content="Board of Members and directors of Cellix Bio"/>
            <meta name="keywords" content="cellix bio Founder CEO, COO and Scientific Team and Advisors, 
                Avaca CEO, COO and Scientific Team and Advisors , 
                cellix bio pharma Founder CEO, COO and Scientific Team and Advisors" 
            />
        </Helmet>
        <div className='patentlandingpage'>
            <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Bulbs.mp4" autoPlay muted loop playsinline className='patents_video_bg' type="video/mp4"/>
            <div className='pipeline-text'>
                <div className='patents_text_1'>
                    <h1 className='pipelineCarouselh1'>LEADERSHIP</h1>
                </div>
            </div>
        </div>

            <div class="wrapper">
                <div class="team">
                    <div class="team_member">
                        <div class="team_img">
                            <img class="team-img" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Cellix+Mahesh+Kandula+-+1.jpg" alt="Team_image"></img>
                        </div>
                        <h3 class="team-lead-h3">Mahesh Kandula</h3>
                        <h5 class="role">Founder</h5>
                        <p>Mahesh brings over 18 years of scientific and entrepreneurial experience in the life science industry. Mr. Kandula has been named an inventor on 180+ United States Patents and Applications and, more than 640+ International Patent Applications. Mr. Kandula received his Master of Technology degree from IIT Kharagpur.</p>
                    </div>
                    
                    <div class="team_member">
                        <div class="team_img">
                            <img class="team-img" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.SubbuApparsundaram.PNG" alt="Team_image"></img>
                        </div>
                        <h3 class="team-lead-h3">Subbu Apparsundaram</h3>
                        <h5 class="role">CDO & COO</h5>
                        <p>Subbu Apparsundaram is an established scientist with extensive experience in drug discovery and development. Dr. Subbu founded VClinBio that entered into strategic partnership with Cellix Bio. Previously, Subbu was a Drug Discovery Scientist at Hoffmann-La Roche Pharmaceuticals, and a faculty at the University of Kentucky Medical Center. He has published several peer reviewed research papers.</p>
                    </div>
                </div>
            </div>	

            <div class="wrapper">
                <h1>Science Team</h1>
                <div class="team">
                    <div class="team_member">
                        <div class="team_img">
                            <img class="team-img" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.FrankDiana.PNG" alt="Team_image"></img>
                        </div>
                        <h3 class="team-lead-h3">Frank Diana</h3>
                        <h5 class="role">CMC & Regulatory</h5>
                        <p>Dr. Frank Diana is experienced in the areas of CMC, Pharmaceutical and Analytical Development. Dr. Diana had a 40-year career in the Pharmaceutical Industry working for Endo Pharmaceuticals, Johnson & Johnson and DuPont Pharmaceuticals mostly in Pharmaceutical Development, Technical Operations and Quality. He obtained his PhD from St. John’s University in NY and is an adjunct professor in the RA/QA graduate program at Temple University’s School of Pharmacy teaching several courses including Global CMC Issues.</p>
                    </div>
                    
                    <div class="team_member">
                        <div class="team_img">
                            <img class="team-img" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.Mudher.PNG" alt="Team_image"></img>
                        </div>
                        <h3 class="team-lead-h3">Dr. Mudher Albassam</h3>
                        <h5 class="role">Pre-clinical Development</h5>
                        <p>Dr. Mudher Albassam has extensive experience in nonclinical development, pathology, nonclinical safety/risk assessment and toxicology. He was a Principal Director and Senior Director in Toxicology & Pathology at Roche Pharmaceuticals. He obtained his PhD on Veterinary Pathology from Purdue University and MS in Veterinary Pathology from the University of Guelph.</p>
                    </div>

                    <div class="team_member">
                        <div class="team_img">
                            <img class="team-img" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.Douglas.png" alt="Team_image"></img>
                        </div>
                        <h3 class="team-lead-h3">Dr. Douglas Greene</h3>
                        <h5 class="role">Medical Affairs & Strategic Advisor</h5>
                        <p>Douglas Greene, MD, served as Executive Vice President, Chief Scientific Officer and Head, Research and Development, Ikaria Pharmaceuticals; Senior Vice President and Senior Scientific Advisor and Head of Corporate Regulatory Development at Sanofi-Aventis; Executive Vice President of Clinical Sciences and Product Development at Merck Research Laboratories and Corporate Officer of Merck, Inc.; served as member of the US Food and Drug Administration's Endocrinologic and Metabolic Drug Advisory Committee and acted as Chairman of the Advisory Committee.</p>
                        <p>Dr. Greene was Professor of Internal Medicine, Director of the Michigan Diabetes Research and Training Center, and Chief, Division of Endocrinology & Metabolism at the University of Michigan School of Medicine. Dr. Greene was Associate Professor of Internal Medicine, Director of the Diabetes Research Laboratory and Head of the General Clinical Research Center at the University of Pittsburgh, and Assistant Professor of Internal Medicine at the University of Pennsylvania. Dr. Greene completed a post-doctoral research fellowship at the Cox Research Institute at the University of Pennsylvania, and Internal Medicine internship and residency at Johns Hopkins Hospital. Dr Greene holds an MD from the Johns Hopkins School of Medicine.</p>
                    </div>

                    <div class="team_member">
                        <div class="team_img">
                            <img class="team-img" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.PaulJeffery.PNG" alt="Team_image"></img>
                        </div>
                        <h3 class="team-lead-h3">Paul Jeffrey</h3>
                        <h5 class="role">Business Strategy and Advisor</h5>
                        <p>Paul Jeffrey is an accomplished Pharmaceutical business consultant and leader with demonstrated new product development and business development capabilities. He has over 30 years of industry experience building product value by leading global teams and creating and implementing clinical and marketing programs to maximize commercial positioning and launch success. He has led commercial development team and alliance partnerships while at Pfizer as VP of Global Commercial Development group.</p>
                    </div>
                </div>
            </div>	
        </>
    );
}
export default Leadership;