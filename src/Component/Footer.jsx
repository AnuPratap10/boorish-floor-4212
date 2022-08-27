import Button from 'react-bootstrap/Button';

import React from 'react'
import { background } from '@chakra-ui/react';

export const Footer = () => {
    return (
        <>
            <div style={{ height: "600px" }}  >
                <br /><br />
                <div style={{ display: "flex" }}>
                    <img style={{ marginLeft: "10%" }} src="https://assets.website-files.com/60819f9be381394642b5659e/6081a538174f4d6bc01bdd27_leadiq-logo.svg" alt="" />
                    <div style={{ marginLeft: "54%" }} >
                        <Button style={{
                            backgroundColor: "#FFC740",
                            color: "black",
                            borderRadius: "20px",
                            fontSize: "16px",
                            padding: "12px",
                            width: "140px",
                            border: "none",
                        }} className="btnfor"
                        >Book a demo     </Button>

                        <Button style={{
                            backgroundColor: "#FFC740",
                            color: "black",
                            borderRadius: "20px",
                            fontSize: "16px",
                            padding: "12px",
                            width: "140px",
                            border: "none",
                        }} className="btnfor2"
                        >Start Free</Button>
                    </div>
                </div>  <br /> <br />

                <div style={{ width: "80%", height: "1px", backgroundColor: "gray", margin: "auto" }}></div>
                <br />  <br />

                <div className="cc" style={{ display: "flex", marginLeft: "10%", }}>
                    <div style={{ width: "170px", height: "300px", }}>

                        <p style={{ fontSize: "22px" }}>Why LeadIQ</p>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Success Stories</p>
                    </div>
                    <div style={{ marginLeft: "20px", width: "200px", height: "300px", }}>
                        <p style={{ fontSize: "22px" }}>Solutions</p>
                        <p style={{ fontSize: "14px" }}>Sales Leaders</p>
                        <p style={{ fontSize: "14px" }}>Revenue Ops</p>
                        <p style={{ fontSize: "14px" }}>Sales Professionals</p>
                    </div>
                    <div style={{ marginLeft: "20px", width: "200px", marginTop: "4%", height: "250px" }}>
                        <p style={{ fontSize: "14px" }}>Eliminating Busy Work</p>
                        <p style={{ fontSize: "14px" }}>Strategic Prospecting</p>

                        <p style={{ fontSize: "14px" }}>Data Accuracy</p>
                    </div>
                    <div style={{ marginLeft: "20px", width: "200px", height: "300px", }}>

                        <p style={{ fontSize: "22px" }}>Resources</p>
                        <p style={{ fontSize: "14px" }}>Blog</p>
                        <p style={{ fontSize: "14px" }}>Support</p>
                        <p style={{ fontSize: "14px" }}>Careers</p>

                        <p style={{ fontSize: "14px" }}>Press</p>
                        <p style={{ fontSize: "14px" }}>Privacy Center</p>
                    </div>
                    <div style={{ marginLeft: "20px", width: "200px", height: "300px", }}>
                        <p style={{ fontSize: "22px" }}>Contact</p>
                        <p> <img src="https://assets.website-files.com/60819f9be381394642b5659e/6081c958408db1111a5f6e4b_leadiq-icon-contact-phone.svg" alt="" />   1-888-653-2347</p>
                        <p> <img src="https://assets.website-files.com/60819f9be381394642b5659e/6081c9584a52ae9f54e9d71c_leadiq-icon-contact-email.svg" alt="" />   support@leadiq.com</p>



                    </div>
                </div>
                <div style={{ backgroundColor: "gray", width: "80%", height: "1px", margin: "auto" }}></div>
                <br />  <br />
                <div style={{ display: "flex", marginLeft: "10%" }}>
                    <p>© LeadIQ, Inc. All rights reserved.</p>
                    <p style={{ marginLeft: "10%", fontSize: "16px" }} > Privacy Policy</p>
                    <p style={{ marginLeft: "3%", fontSize: "16px" }} >Terms of Service</p>
                    <p style={{ marginLeft: "3%", fontSize: "16px" }} >Security</p>
                    <p style={{ marginLeft: "3%", fontSize: "16px" }} >Do Not Sell My Personal Information</p>




                    <img style={{ width: "40px", height: "40px", marginLeft: "3%" }} src="https://img.icons8.com/color/2x/facebook-new.png" alt="" />
                    <img style={{ width: "40px", height: "40px", marginLeft: "1%" }} src="https://img.icons8.com/color/2x/twitter-circled--v4.gif" alt="" />
                    <img style={{ width: "40px", height: "40px", marginLeft: "1%" }} src="https://img.icons8.com/color/2x/linkedin-circled.png" alt="" />
                    <img style={{ width: "40px", height: "40px", marginLeft: "1%" }} src="https://img.icons8.com/doodle/2x/youtube-play.png" alt="" />

                </div>
            </div>
        </>
    )
}
