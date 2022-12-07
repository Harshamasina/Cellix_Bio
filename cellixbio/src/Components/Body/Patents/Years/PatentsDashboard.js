import React from 'react';
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
        </>
    );
}
export default PatentsDashboard;