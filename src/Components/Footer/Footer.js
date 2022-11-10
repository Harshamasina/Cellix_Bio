import React from 'react';
import { NavLink} from "react-router-dom";
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import GoToTop from './GoToTop';
const Footer = () => {
  return (
    <div>
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className=" mx-auto py-5" style={{ width: '80%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
              <a href="/" className="d-flex align-items-center p-0 text-dark">
                <img className='Fimg'
                  alt="logo"
                  src="https://www.cellixbio.com/images/logo-dark.png"
                  width="30px"
                />
                {/* <span className="ml-3 h5 font-weight-bold">Cellix Bio</span> */}
              </a>
              <div className='FooterContainerp'>
                <p className="my-3" style={{ width: '600px' }}>
                  We are focusing to develop best-in-class therapies for the treatment of Neurological, Inflammatory and Metabolic Diseases.
                </p>
              </div>
              <div className='FooterContainerp'>
                <ul className='FooterUL'>
                  <li><span>GLOBAL PATENTS: </span><b>432</b></li>
                  <li><span>ISSUED U.S. PATENTS: </span><b>63</b></li>
                  <li><span>PENDING U.S. PATENETS: </span><b>28</b></li>
                </ul>
              </div>
          </CDBBox>
          <CDBBox display="flex" style={{ width: '50%' }} justifyContent="between">
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '500', color:'whitesmoke' }}>
                Product
              </p>
              <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0'}}>
                      <NavLink to="/Home">Home</NavLink>
                      <NavLink to="/Patents">Patents</NavLink>
                      <NavLink to="/IP">Intellectual Property</NavLink>
                      <NavLink to="/Pipeline">Pipeline</NavLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '500',color:'whitesmoke' }}>
                About Us
              </p>
              <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                      <NavLink to="/About">About</NavLink>
                      <NavLink to="/Leadership">Leadership</NavLink>
                      <NavLink to="/Contact">Contact Us</NavLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
          <CDBBox display="flex" className="mt-4" justifyContent="between">
            <div className='smallContainer'>
               <small className="ml-2">&copy; Cellix Bio, 2022. All rights reserved.</small>
            </div>
             
             <CDBBox display="flex">
                <div className='FooterIcons'>
                    <CDBBtn href="https://www.cellixbio.com/" flat color="dark" className="p-2">
                      <CDBIcon fab icon="google" />
                    </CDBBtn>
                    <CDBBtn href="https://www.cellixbio.com/" flat color="dark" className="mx-3 p-2">
                      <CDBIcon fab icon="linkedin" />
                    </CDBBtn>
                    <CDBBtn href="https://www.cellixbio.com/" flat color="dark" className=" p-2">
                      <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn href="https://www.cellixbio.com/" flat color="dark" className="mx-3 p-2">
                      <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                    <CDBBtn href="https://www.cellixbio.com/" flat color="dark" className="p-2">
                      <CDBIcon fab icon="twitter"/>
                    </CDBBtn>
                    <CDBBtn href="https://www.cellixbio.com/" flat color="dark" className="mx-3 p-2">
                      <CDBIcon fab icon="reddit"/>
                    </CDBBtn>
                </div>
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  <GoToTop/>
</div>
  );
};
export default Footer;