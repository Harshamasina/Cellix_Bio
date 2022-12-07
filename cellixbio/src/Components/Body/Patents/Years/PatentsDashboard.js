import Card from 'react-bootstrap/Card';
import React from 'react';
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom'
function PatentsDashboard(){
    const {years} = useParams();
    return(
        <>
            <div className="PDcontainer">
                <div className="PDcontainerh2">
                    <h2 className="PDh2">Access the Patents filed by Cellix bio in {years} below</h2>
                </div>
            </div>
            <div className='CardContainer'>
                <Card className = "shadow-lg PatentsCard">
                    <Card.Body>
                        <Card.Title className='PDCardTitle'>
                            {/* <p className='Wno' onClick={() => navigate('/PatentInfo')}>US20210380525</p> */}
                            <Link className='Wno'  to = "/PatentInfo/US20210380525">US20210380525</Link>
                        </Card.Title>
                        <div className='cardTextContainer'>
                            <div className='cardTextInfoContainer'>
                                <Card.Text className='CardTextInfo'>
                                    <p> treating or preventing Parkinson's disease may be formulated for oral, buccal, rectal, topical, transdermal, transmucosal, intravenous, parenteral administration, subcutaneous, depot, intramuscular, syrup, or injection.</p>
                                </Card.Text>
                            </div>
                            <div className='cardTextDateContainer'>
                                <Card.Text>
                                    <p><span className='CardTextSpan'>Publishing Date: </span>09.12.2021</p>
                                </Card.Text>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
export default PatentsDashboard;