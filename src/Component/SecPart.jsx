import { background } from '@chakra-ui/react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const SecPart = () => {
    return (
        <>
            
            <div className="cont">
                <div className="pros">
                    <h1 style={{color:"white"}} >Prospect Smarter</h1>
                    <p style={{color:"white"}}>LeadIQ makes sales teams more efficient at<br/>
                        outbound prospecting by capturing and<br/>
                        sequencing contact information with one click.
                    </p>

                    <InputGroup id="mb"  >
                        <Form.Control className="formCont" style={{
                            width:"270px",
                            borderRadius:"30px",
                            padding:"17px",
                            border:"none",
                             
                        }}
                            placeholder="Enter Your Work email"
            
                        />
                        <Button  style={{
                            borderRadius:"40px",
                            padding:"5px",
                            width:"130px",
                          backgroundColor:"#ffd265",
                          color:"black",
                          border:"none",
                            
                            }}  id="addon2">
                           Start Free
                        </Button>
                    </InputGroup>


                    <p style={{color:"white"}}  >By signing up,you agree to the Terms of Use and Privacy Policy</p>

                    
                    <div children className="clanlead">
                       <img className="clan" src="https://assets.website-files.com/6220f0eff47bc4199f479ed8/6220f0eff47bc4aaca47a037_Clari-01.svg" alt="" />
                          <img className="clan" src="https://assets.website-files.com/6220f0eff47bc4199f479ed8/6220f0eff47bc45bcd479f25_leadiq-logo-showpad.svg" alt="" />
                          <img  className="clan" src="https://assets.website-files.com/6220f0eff47bc4199f479ed8/6220f0eff47bc4260147a03f_walkme-client-logo-03.svg" alt="" />
                            <br />
                            <br />
                            <img className="clans" src="https://assets.website-files.com/6220f0eff47bc4199f479ed8/6220f0eff47bc4431847a039_Segment-client-logo-04.svg" alt="" />
                           <img className="clans" src="https://assets.website-files.com/6220f0eff47bc4199f479ed8/6220f0eff47bc4404a479f28_leadiq-logo-sitecore.svg" alt="" />
                           <img className="clans" src="https://assets.website-files.com/6220f0eff47bc4199f479ed8/6220f0eff47bc47c1d479f24_leadiq-logo-mulesoft.svg" alt="" />
                           </div>

                </div>

                <div classname="pros2" style={{ marginLeft: "45%",marginTop:"10%" }}>
                    <img className="img1" src="https://assets.website-files.com/60819f9be381394642b5659e/628e78dea1a51b019def8fc3_prospector-p-500.webp" alt="" />
                    <img className="img2" src="https://assets.website-files.com/60819f9be381394642b5659e/628e790730e8f2c418c890ae_interface-background-p-800.webp" alt="" />
                </div>

            </div>
        </>
    )
}
