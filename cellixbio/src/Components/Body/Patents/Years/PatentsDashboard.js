import Card from 'react-bootstrap/Card';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom'

function PatentsDashboard(){
    const [patents, setPatents] = useState("");
    const {years} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`http://localhost:3003/patents/years/${years}`);
            console.log(data);
            setPatents(data);
        };
        fetchData();
    });
    return(
        <div>
            <div className="PDcontainer">
                <div className="PDcontainerh2">
                    <h2 className="PDh2">Access the Patents filed by Cellix bio in {years} below</h2>
                </div>
            </div>
            {
                patents && patents.data.map((patent) => (
                        <div className='CardContainer'>
                                <Card
                                    style={{ width: '90rem' }} 
                                    className = "shadow-lg PatentsCard">
                                   <Card.Body>
                                        <Card.Title>
                                            <Link className='Wno' to= {"/patentInfo/"+patent.wno} target={"_blank"}>{patent.wno}</Link>
                                        </Card.Title>
                                        <div className='cardTextContainer'>
                                            <div className='cardTextInfoContainer'>
                                                <Card.Text className='CardTextInfo'>
                                                    <p>{patent.diseases}</p>
                                                </Card.Text>
                                            </div>
                                            <div className='cardTextDateContainer'>
                                                <Card.Text>
                                                    <p><span className='CardTextSpan'>Publication Date: </span>{patent.publication_date}</p>
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                        </div>
                ))
            }  
        </div>
    );
}
export default PatentsDashboard;