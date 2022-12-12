function Compounds({compound}){
    console.log(compound);
    const CompoundArray = compound.split("\n");
    console.log(CompoundArray);

    return(
        <div>
            <h3 className="PITBh3">COMPOUNDS/METHODS</h3>
            <div className="CompoundsImgContainer">
                {
                        CompoundArray.map((image) => {
                            return(
                            <img className='PatentImages' src={image} alt=""></img>
                            )
                        })
                }
            </div>
        </div>
    );
}
export default Compounds;