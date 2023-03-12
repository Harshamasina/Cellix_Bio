import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

function SearchPatents(){
    const [searchPatent, setSearchPatent] = useState();
    const [searchKey, setSearchKey] = useState();

    const searchHandle = async (e) => {
        let key = e.target.value;
        setSearchKey(key);
        if(key){
            let result = await fetch(`https://backend.cellixbio.info/patents/${key.replaceAll("/", "%2F")}`);
            result = await result.json()
            if(result){
                setSearchPatent(result);
            }
        }else{
            console.log("No Patent Found");
        }
    }

    const highlightStyle = {
        backgroundColor: 'rgba(14, 110, 89, 0.15)',
        fontWeight: '600',
        borderRadius: '5px',
    };

    return(
        <div>
            <div className="SearchPatentsh2Container">
                <h3 className="SearchPatentsh2">Cellix Bio Patent Intelligence</h3>
            </div>
            <div>
                <div className="SearchPatentContainer">
                   <input onChange={searchHandle} className="SearchBarPatents" type="search" spellCheck="off" placeholder="ENTER PATENT APPLICATION NUMBER / PCT NUMBER / THERAPEUTIC AREA / DISEASES"></input>
                </div>
                {     
                    searchPatent && searchPatent.length === 0 ? 
                    <img className="searchPatentImg" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Patent+Data+Not+Found.PNG" alt="not Found"></img> : 
                    searchPatent && searchPatent.map((patent) => (
                        <div className='CardContainer' key={patent._id}>
                            <Card
                                style={{ width: '90rem' }} 
                                className = "shadow-lg PatentsCard">
                                <Card.Body>
                                    <Card.Title>
                                        <Link className='Wno' to = {"/patentInfo/"+patent.wno} target={"_blank"}>
                                            <Highlighter searchWords={searchKey.split('/')} autoEscape={true} textToHighlight={patent.wno} highlightStyle={highlightStyle} />
                                        </Link>
                                    </Card.Title>
                                    <div className='cardTextContainer'>
                                        <div className='cardTextInfoContainer'>
                                            <Card.Text className='CardTextInfo'>
                                                <p>
                                                    <Highlighter searchWords={searchKey.split('/')} autoEscape={true} textToHighlight={patent.diseases} highlightStyle={highlightStyle} />
                                                </p>
                                                <p className='CardTextSpanTA'><span className='CardTextSpan'>Therapeutic Area: </span>
                                                    <Highlighter searchWords={searchKey.split('/')} autoEscape={true} textToHighlight={patent.therapeutic_area} highlightStyle={highlightStyle}/>
                                                </p>
                                                <p className='CardTextSpanTA'><span className='CardTextSpan'>PCT / Application Number: </span>
                                                    <Highlighter searchWords={searchKey.split('/')} autoEscape={true} textToHighlight={patent.pct} highlightStyle={highlightStyle}/>
                                                </p>
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
        </div>
    );
}
export default SearchPatents;