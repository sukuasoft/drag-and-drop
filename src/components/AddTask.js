import React, { useContext, useRef } from "react"
import { DragContext } from "../contexts/drag"
export default function AddTask(){
    const {blocos, setBlocos} = useContext(DragContext);
    const inputRef = useRef(null);

    function addTask(){
        

        if(inputRef.current){
            if (inputRef.current.value == ''){
                alert('Digite algo!')
                return;
            }
            let data = {
                content:inputRef.current.value, 
                id: blocos.length+1
            };
            setBlocos([
                ...blocos, 
                data
            ])
            inputRef.current.value ='';
        }


    }
    return (
        <div className="group__drag_add">
        <input onKeyUp={(ev)=>{
            
             if (ev.key === 'Enter' || ev.keyCode === 13) {
                addTask();
            }
        }}  ref={inputRef} className="input__drag_add" type='text' placeholder="Escreva a sua nota..."/>
        <button className="btn__drag_add" onClick={addTask}>
            Add
        </button>
    </div>
    )
}