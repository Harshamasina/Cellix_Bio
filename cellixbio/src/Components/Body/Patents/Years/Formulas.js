function Formulas({formula}){
    console.log(formula);
    const FormulaArray = formula.split("\n");
    console.log(FormulaArray);
    console.log("Array Length: ", FormulaArray.length);

    return(
        <div>
            <h3 className="PITBh3">FORMULAS</h3>
                        <div className="PatentsImgContainer">
                {
                    FormulaArray.length>1 ? FormulaArray.map((image) => {
                        return(
                            
                        <img className='PatentImages' src={image} alt=""></img>
                        )
                    }) : <h1>Data Not Found</h1>
                }
            </div>
        </div>
    );
}
export default Formulas;