import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
function IP(){
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
                        <Accordion.Header><h4>CELLIX BIO's U.S PATENT APPLICATIONS</h4></Accordion.Header>
                            <Accordion.Body className='IPAB'>
                            <Table striped bordered hover size="sm" className='mt-3 shadow-lg'>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Document/Patent Number</th>
                                        <th>Title</th>
                                        <th>Publication Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>US-11485730-B2</td>
                                    <td>Compositions and methods for the treatment of fungal infections</td>
                                    <td>2022-11-01</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
        </Accordion>           
        </>
    )
}

export default IP;