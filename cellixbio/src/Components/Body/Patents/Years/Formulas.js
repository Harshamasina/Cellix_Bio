import TherapeuticArea from './TherapeuticArea';
function Formulas(){
    return(
        <div>
            <TherapeuticArea></TherapeuticArea>
            <h3 className="PITBh3">FORMULAS</h3>
            <div className="PatentsImgContainer">
                <img className="PatentFormulas" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/2014/AU2013264896/AU2013264896.Formulas.1.PNG" alt="AWS"></img>
                <img src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/2014/AU2013264896/AU2013264896.Formulas.2.PNG" alt="AWS"></img>
            </div>
        </div>
    );
}
export default Formulas;