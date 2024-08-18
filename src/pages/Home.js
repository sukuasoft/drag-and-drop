import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div>
              <div style={{
            display: 'flex', 
            gap: '20px', 
            marginBottom: '20px'
        }}>
            <Link to='/counter'>Counter</Link>
            <Link to='Drag'>Drag</Link>
            
        </div>
    
            <Link to='/teste'>Invalid Link</Link>

        </div>
      
    )
}