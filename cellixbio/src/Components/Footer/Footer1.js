import { BsFacebook } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { NavLink} from "react-router-dom";
import GoToTop from './GoToTop';
import { Link } from "react-router-dom";
import './Footer1.css'

const Footer = () => {
    return(
        <div>
            <footer className='footer'>
                <div className='footer-left'>
                    <Link to='/'><img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Icon.png" alt="cellix logo" /></Link>
                    <p>Our Subsidiaries: </p>
                    <div className="footer-logos">
                        <a href='https://www.cellixbiopharma.com/' target="_blank" rel="noreferrer"><img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/cbp+footer.png" alt="cbp"/></a>
                        <a href='https://www.avacapharma.com/' target="_blank" rel="noreferrer"><img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/ap+footer+1.png" alt="ap" style={{width: '37%'}} className="footeraplogo"/></a>
                    </div>
                </div>
                <ul className='footer-right'>
                    <li>
                        <ul className='box'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/PT'>Platform Technology</NavLink></li>
                            <li><NavLink to='/Pipeline'>Pipeline</NavLink></li>
                            <li><NavLink to='/Patents'>Patents</NavLink></li>
                            <li><NavLink to='/IP'>Intellectual Property</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <ul className='box'>
                            <li><NavLink to='/Inventor'>Inventor</NavLink></li>
                            <li><NavLink to='/Leadership'>Leadership</NavLink></li>
                            <li><NavLink to='/Media'>Media</NavLink></li>
                            <li><NavLink to='/Careers'>Careers</NavLink></li>
                            <li><NavLink to='/Contact'>Conatct</NavLink></li>
                        </ul>
                    </li>
                </ul>
                <div className='footer-bottom'>
                    <div className="socials">
                        <a href="https://www.cellixbio.com/" target="_blank" rel="noreferrer"><BsGoogle /></a>
                        <a href="https://www.linkedin.com/in/cellix-bio-36813111a/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                        <a href="https://www.facebook.com/profile.php?id=100089107628765&mibextid=ZbWKwL" target="_blank" rel="noreferrer"><BsFacebook /></a>
                        <a href="https://www.instagram.com/cellix_bio/" target="_blank" rel="noreferrer"><BsInstagram /></a>
                        <a href="https://twitter.com/CelixBio" target="_blank" rel="noreferrer"><BsTwitter /></a>
                    </div>
                    <p>&copy; Cellix Bio, 2014 - {new Date().getFullYear()}. All rights reserved.</p>
                </div>
            </footer>
            <GoToTop></GoToTop>
        </div>
    );
}
export default Footer;