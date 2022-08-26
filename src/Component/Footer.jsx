import Button from 'react-bootstrap/Button';

import React from 'react'
import { background } from '@chakra-ui/react';

export const Footer = () => {
    return (
        <div style={{ height: "600px" }}  >
            <br /><br />
            <div style={{ display: "flex",justifyContent:"space-between" }}>
                <img style={{marginLeft:"30%"}} src="https://assets.website-files.com/60819f9be381394642b5659e/6081a538174f4d6bc01bdd27_leadiq-logo.svg" alt="" />

                <Button style={{borderRadious:"20px", padding:"10px", 
                backgroundColor:" #FFC740",color:"black",border:"none"    }} className="btnfor"  
                >Book a demo     </Button>
           
                <Button style={{marginRight:"90px", borderRadious:"20px",
                 padding:"10px",backgroundColor:" #FFC740",color:"black",border:"none" }} className="btnfor2"  
                 >Start Free</Button>

            </div>

        </div>
    )
}
