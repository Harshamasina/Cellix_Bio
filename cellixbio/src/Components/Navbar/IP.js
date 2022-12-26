import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { useState, useEffect } from 'react';

function IP(){
    const [usPatents, setUSPatents] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`http://13.233.51.172/uspatents`);
                setUSPatents(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    },[]);
    // console.log(usPatents);
    document.title = 'Intellectual Property - Cellix Bio';
    return(
        <>
            <div className='IPContainer'>
               <div className='IPContainerh3'>
                    <div className='DescContainerh3'><span></span>
                        <span className="WWDh3">INTELLECTUAL PROPERTY</span><span></span>
                    </div>
                </div>
                <div className="IPpContainerp">
                    <p className="IPp"><span className="AboutSpan">Cellix Bio</span> has a portfolio of over 640+ international patents published. The Company has obtained 117 Composition of Matter Allowed / Issued U.S Patents from the US Patent & Trademark Office and 28 U.S Patent Pending Applications in diverse therapeutic areas. We are also committed to protecting our intellectual property estate of patent rights and trade secrets and the potential commercial and clinical advantages this protection provides for our proprietary technology.</p>
                </div>
                <div className='IPContainerh4'>
                    <h4 className="IPh3">Our patent portfolio includes issued patents and patent applications in the world’s major markets</h4>
                </div>
            </div>
            
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4>U.S PATENT PORTFOLIO</h4></Accordion.Header>
                            <Accordion.Body className='IPAB'>
                                <Table striped bordered hover responsive className='mt-3 shadow-sm'>
                                    <thead>
                                        <tr>
                                            <th className='IPPatentTableHead'>S.NO</th>
                                            <th className='IPPatentTableHead'>PATENT NUMBER</th>
                                            <th className='IPPatentTableHead'>TITLE</th>
                                            <th className='IPPatentTableHead'>PUBLICATION DATE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            usPatents.data && usPatents.data.map((uspatent) => (
                                                <tr>
                                                    <td>{uspatent.sno}</td>
                                                    <td className='usPatentNumber'>{uspatent.patent_number}</td>
                                                    <td className='usPatentTitle'>{uspatent.title}</td>
                                                    <td>{uspatent.publication_date}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>           
        </>
    )
}
export default IP;