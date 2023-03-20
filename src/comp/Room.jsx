import {React,useState } from 'react'
import { Link } from 'react-router-dom';
import AddScreen from './AddScreen';
import Product from './Product';
import './styles/room.css'

export default function Room(props) {
    
    const [on, setOn] = useState(0);
    const change = () => {
        if (on === 0) {
            setOn(1);
        }
        else {
            setOn(0);
        }
    }
    const showAdd = () => {
        if (on === 1) {
            return (<AddScreen type={props.room.type} prods={products} change={change} set={setProducts} />)
        }
        else {
            return ('')
        }
    }
    
    const [products, setProducts] = useState(props.room.products);
    const saveRoom =(products)=>{
        props.room.products = products;
    }
    return (
        <div>
            <div id = 'names'>
            <p>room type: {props.room.type}</p>
            <p>room name : {props.room.name}</p>
            <Link to='/'><button onClick={()=>{saveRoom(products)}}>Return</button></Link>
            </div>

            <button id='addProduct' onClick={() => { change() }}>add product</button>

            <div id= 'allProducts'>
                {products.map((val, i) => {
                    return <Product prod={val} i={i}  key={i}/>
                })}
            </div>
            {showAdd()}

           
        </div>
    )
}






