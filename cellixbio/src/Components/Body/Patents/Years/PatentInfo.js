import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Claims from './Claims';
import Compounds from './Compounds';
import Formulas from './Formulas';
import {useParams} from 'react-router-dom'
// import TherapeuticArea from './TherapeuticArea';

function PatentInfo(){
    const {wno} = useParams();
    return(
        <div>
             <h2 className='PatentInfoh2'>{wno}</h2>
            <Tabs
                defaultActiveKey="Formulas"
                id="uncontrolled-tab-example"
                className="mb-3 shadow-lg Tabs"
                fill
                >
                {/* <Tab eventKey="Therapeutic Area" title="Therapeutic Area" active hide>
                    <TherapeuticArea></TherapeuticArea>
                </Tab> */}
                <Tab eventKey="Formulas" title="Formulas">
                    <Formulas></Formulas>
                </Tab>
                <Tab eventKey="Claims" title="Claims">
                    <Claims></Claims>
                </Tab>
                <Tab eventKey="Compounds" title="Compounds and Methods">
                    <Compounds></Compounds>
                </Tab>
            </Tabs>
        </div>
    );
}
export default PatentInfo;