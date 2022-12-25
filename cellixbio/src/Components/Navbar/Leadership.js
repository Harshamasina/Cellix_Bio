// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

function Leadership() {
  document.title = 'Leadership - Cellix Bio';
  return (
           <div className='LeaderContainer'>
            <div className='LeaderContainer1'>
              <div className='LeaderImgContainer'>
                  <img className='LeaderImg' src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.Mahesh.PNG" alt='Limage'/>
              </div>
              <div className='LeaderTitleContainer'>
                  <h1 className='LeaderTitle'>Mahesh Kandula</h1><p className='Leadertext'> Inventor & IPFounder</p>
              </div>
            </div>
            <div className='LeaderContainer2'>
              <div className='LeaderSubTitleContainer'> 
                <div className='DescContainerh3'><span></span>
                  <span className="WWDh3">About Mahesh Kandula</span><span></span>
                </div>
              </div>  
                            <hr className='LeaderHR'></hr>
                <div className='LeaderMsgContainer'>
                  <p className='LeaderMsg'>Mahesh brings over 18 years of scientific and entrepreneurial experience in the life science industry. Mr. Kandula has been named an inventor on 112 United States Patents and Applications and, more than 635 International Patent Applications. Mr. Kandula received his Master of Technology degree from IIT Kharagpur.</p>
                </div>
            </div>
          </div>   
  );
        }

export default Leadership;