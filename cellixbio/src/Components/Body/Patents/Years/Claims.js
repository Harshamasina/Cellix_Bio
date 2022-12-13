function Claims({claim}){
    console.log(claim);
    const ClaimArray = claim.split("\n");
    console.log(ClaimArray);
    console.log("Array Length: ", ClaimArray.length);
    return(
        <div>
            <h1 className="PITBh3">CLAIMS</h1>
            <div className="ClaimsContainer">
            {
                    ClaimArray.length>0 ? ClaimArray.map((image) => {
                        return(
                          <div>
                            <div className="patentClaimsp">
                                <p>{image}</p>
                            </div>
                            <img className='PatentImages' src={image} alt=""></img>
                          </div>
                        )
                    }) : <h1>Data Not Found</h1>
                }
            </div>
        </div>
    );
}
export default Claims;