import { useContext, useState } from "react";
import { DragContext } from "../contexts/drag";
import React from "react";
import './bloco.css';

export default function Bloco({content,id}){
    const {blocos, setBlocos, blocoSelected, setBlocoSelected} = useContext(DragContext);
    const [isDrag, setIsDrag] =useState(false);

    function deleteTask(){
        setBlocos(
            blocos.filter((value)=>{
                if (value.id == id){
                    return false;
                }
                return true;
                
            })
        );
    }
    return (
        <div className={"bloco " + (isDrag ? "bloco-drag" : "")} style={{
            padding: '10px', 
            userSelect: 'none'
        }} draggable={true}  onDragStart={(ev)=>{
                 setIsDrag(true);
ev.dataTransfer.setData("data", id);
var img = new Image();
img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
ev.dataTransfer.setDragImage(img, 0, 0);
ev.dataTransfer.effectAllowed='none'

            setBlocoSelected(id);
        }} onDragOver={(ev)=>{
            ev.preventDefault();
        }} onDragEnd={()=>{
            setIsDrag(false);
        }} onDrop={(ev)=>{
            ev.preventDefault();
return;
            let data = ev.dataTransfer.getData("data");
            const bls = [];
            for (let x = 0; x< blocos.length; x++){
                if (blocos[x].id == id){
                    let b= blocos.find((value)=>{
                        if (value.id == data){
                            return true;
                        }
                        return false;
                    });
                    bls.push( b)
                }
                else if (blocos[x].id == data){
                    let b= blocos.findIndex((value)=>{
                        if (value.id == id){
                            return true;
                        }
                        return false;
                    });
                    bls.push(blocos[b]);
                }
                else{
                    bls.push(blocos[x]);

                }
            }
            setBlocos(bls);
        }} onDragEnter={(ev)=>{
            ev.preventDefault();
            
            const bls = [];
            for (let x = 0; x< blocos.length; x++){
                if (blocos[x].id == id){
                    let b= blocos.find((value)=>{
                        if (value.id == blocoSelected){
                            return true;
                        }
                        return false;
                    });
                    bls.push( b)
                }
                else if (blocos[x].id == blocoSelected){
                    let b= blocos.findIndex((value)=>{
                        if (value.id == id){
                            return true;
                        }
                        return false;
                    });
                    bls.push(blocos[b]);
                }
                else{
                    bls.push(blocos[x]);

                }
            }
            setBlocos(bls);
        }} onClick={deleteTask}>{content}
            <button className="bloco__delete">X</button>
        </div>
    );
}