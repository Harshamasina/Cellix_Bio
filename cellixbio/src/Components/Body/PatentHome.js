import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function PatentHome(){
    const navigate = useNavigate();
    return (
        <>
            <div className='PatentHomeContainer'>
                <img className='PatentHomeImg' src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.PatentHome.bg.PNG" alt="hands"></img>
                <p className='PatentHomep'>CELLIX BIO's HAS OVER 630 GLOBAL PATENTS FROM 2009 TO 2022</p>
                <Button onClick={() => navigate('/Patents')} variant="outline-info" className='PatentHomeButton'>Know More</Button>
            </div>
        </>
    );
}
export default PatentHome;