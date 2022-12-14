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
                    ClaimArray.length>1 ? ClaimArray.map((image) => {
                        return(
                          <div>
                            <div className="patentClaimsp">
                                <span className = "PatentClaimsText">{image}</span>
                            </div>
                            <img src={image} alt=""></img>
                          </div>
                        )
                    }) : <img width={500} height={450} src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CLAIMS.png" alt="aws"></img>
                }
            </div>
        </div>
    );
}
export default Claims;