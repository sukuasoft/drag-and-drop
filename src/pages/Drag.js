import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/drag.css'
import { DragContext } from "../contexts/drag";
import Bloco from "../components/Bloco";
import AddTask from "../components/AddTask";


export default function Drag(){
    const [blocos, setBlocos] = useState([
       {
        id: 1, 
        content:  'teste', 

       }, 

       {
        id: 2, 
        content:   'tarefa qualquer', 
        
       }, 
       {
        id: 3, 
        content:   'teste 123', 
        
       },
        
    ]);
    const [blocoSelected, setBlocoSelected]=useState(-1);
    return (
        <DragContext.Provider value={{
            blocos, 
            setBlocos, 
            blocoSelected, 
            setBlocoSelected
        }} >
            <div style={{
                width: '300px'
            }}>
            <h1>Notas</h1>

            <AddTask />
            {
                blocos.length > 0? 
                (
                    <div style={{
                        width: '100%',
                        padding: '10px', 
                        background: '#333', 
                        marginBottom: '20px'
                    }}>
        
                        {blocos.map((value)=>{
                            return (<Bloco id={value.id} content={value.content} key={value.id}/>);
                        })}
        
                    </div>):
                    (<></>)
            }
         
            <Link to='/'>Voltar</Link>
            
        </div>
        </DragContext.Provider>
    )
}