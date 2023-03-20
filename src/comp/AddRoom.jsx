import React from 'react'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'

export default function AddRoom(props) {
const nav = useNavigate();
const[name,setName]= useState('');
const[color,setColor] =useState('');
const[type ,setType] =useState('');
    const validateCreate = ()=>{
            if(type === '' ||type === 'null'){
                alert('Error')
            }
            else if(name.length <=1 ||name.length>5){
                alert('Error')
            }
            else{
                props.add(type , name , color);
                nav('/')
            }
    }
    
    return (
        <div>
            <select onChange={(e)=>{setType(e.target.value)}}>
                <option  value='null'>Choose room</option>
                <option value='bedroom'>bedroom</option>
                <option value='bathroom'>bathroom</option>
                <option value='kitchen'>kitchen</option>
            </select><br /> 
            <input type='text' onChange={(e)=>{setName(e.target.value)}} placeholder='Room name' required/><br />
            <input type='text' onChange={(e)=>{setColor(e.target.value)}} placeholder='Choose color' required/><br />
            <button onClick={()=>{validateCreate()}}>create</button>
        </div>
    )
}
