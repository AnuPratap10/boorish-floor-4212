
import { Button } from '@chakra-ui/react'
import React from 'react'

export const ForthPage = () => {
    return (
        <div className="forth">

            <div style={{ display: "flex" }}>
                <div style={{ marginLeft: "20%" }} >
                    <h2 classname="forthh2" style={{ marginTop: "20%", color: "white" }} >

                        Locating contact data isn't your  <br />
                        biggest problem—it's just the tip <br />
                        of the iceberg.
                    </h2>
                    <p style={{ color: "white" }}   >Modern sales requires engagement across <br /> the entire buying team.</p>
                    <br />

                    <Button style={{
                        backgroundColor: "#FFC740",
                        color: "black",
                        borderRadius: "20px",
                        fontSize: "16px",
                        padding: "12px",
                        width: "140px",
                        border: "none"
                    }} className="btnfor"  >Book a demo</Button>
                    <Button style={{
                        backgroundColor: "#FFC740",
                        color: "black",
                        borderRadius: "20px",
                        fontSize: "16px",
                        padding: "12px",
                        width: "140px",
                        border: "none"
                    }} className="btnfor2"  >Start Free</Button>


                </div>

                <img style={{ height: "500px", display: "inline", marginLeft: "20%", marginTop: "5%" }}
                    src="https://assets.website-files.com/60819f9be381394642b5659e/6081bb440430db95e36d238d_leadiq-iceberg-image-compleat.svg" alt="" />
            </div>



        </div>
    )
}
