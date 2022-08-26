import Button from 'react-bootstrap/Button';
import React from 'react'

export const GrayPage = () => {
    return (
        <>
            <div style={{ height: "900px" ,backgroundColor:"#f4fbfc",border:"1px solid red"}}>

                <div>
                    <h1>Sales teams spend too much time on <br /> low value activities. </h1>
                </div >


                <div className="div1flexg" style={{ display: "flex", marginTop: "10%" }}>

                    <div className="div1g">
                        <h2>LeadIQ allows you to:</h2>
                        <img style={{ marginRight: "90%", marginTop: "10px" }} src="https://assets.website-files.com/60819f9be381394642b5659e/6081b03989e2987115690e4b_leadiq-activities-icon-eliminates.svg" alt="" />
                        <h4 style={{ marginTop: "-40px", marginLeft: "-35%" }} >Eliminate busy work</h4>
                        <br />
                        <img style={{ marginRight: "90%", marginTop: "10px" }} src="https://assets.website-files.com/60819f9be381394642b5659e/6081b0396fa45686e75d2ecc_leadiq-activities-icon-enriches.svg" alt="" />
                        <h4 style={{ marginTop: "-40px" }} >Enrich and aggregate your prospect's data</h4>
                        <br />
                        <img style={{ marginRight: "90%", marginTop: "10px" }} src="https://assets.website-files.com/60819f9be381394642b5659e/6081b03925595b6cd5dd0861_leadiq-activities-icon-makes.svg" alt="" />
                        <h4 style={{ marginTop: "-40px", marginLeft: "10%" }} >Make prioritization and authentic personalization easier</h4>
                        <br />
                        <br />
                        <Button className="grbtn"
                          
                           >Browser feature</Button>


                    </div>

                    <div className="div2g">

                        <img style={{ width: "100%" }} src="https://assets.website-files.com/60819f9be381394642b5659e/61681bbedd3fc2974173a5c8_LeadIQ-Integrations%202.webp" alt="" />



                    </div>
                </div>

            </div>
        </>
    )
}
