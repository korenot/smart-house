import {React,useState} from 'react'


export default function Product(props) {
    const [onOff, setOnOff] = useState(props.prod.color);
    const turn = () => {
        if (onOff === 'red') {
            props.prod.color = 'green'
            setOnOff('green')
        }
        else {
            props.prod.color = 'red'
            setOnOff('red')
        }
    }
  return (
        <button className = 'prod' key={props.i} style={{backgroundColor:onOff}} onClick={()=>{turn()}}>{props.prod.name}</button>
  )
}


class student{
courses = ['math','english'];
 constructor (name , shirtColor){
    this.name = name;
    this.shirtColor = shirtColor;
 }
}