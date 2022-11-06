import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
const Footer = () => {
  return (
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
              <p className="my-3" style={{ width: '600px' }}>
                We are focusing to develop best-in-class therapies for the treatment of Neurological, Inflammatory and Metabolic Diseases.
              </p>
              <ul className='FooterUL'>
                <li><span>GLOBAL PATENTS: </span><b>432</b></li>
                <li><span>ISSUED U.S. PATENTS: </span><b>63</b></li>
                <li><span>PENDING U.S. PATENETS: </span><b>28</b></li>
              </ul>
          </CDBBox>
          <CDBBox display="flex" style={{ width: '50%' }} justifyContent="between">
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '500', color:'whitesmoke' }}>
                Product
              </p>
              <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0'}}>
                <CDBFooterLink href="./Home">Home</CDBFooterLink>
                <CDBFooterLink href="./Patents">Patents</CDBFooterLink>
                <CDBFooterLink href="./IP">Intellectual Property</CDBFooterLink>
                <CDBFooterLink href="./Pipeline">Pipeline</CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '500',color:'whitesmoke' }}>
                About Us
              </p>
              <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="./About">About</CDBFooterLink>
                <CDBFooterLink href="./Leadership">Leadership</CDBFooterLink>
                <CDBFooterLink href="./Contact">Contact Us</CDBFooterLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox display="flex" className="mt-4" justifyContent="between">
          <small className="ml-2">&copy; Cellix Bio, 2022. All rights reserved.</small>
          <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="google" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="linkedin" />
            </CDBBtn>
            <CDBBtn flat color="dark" className=" p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="twitter"/>
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="reddit"/>
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};
export default Footer;