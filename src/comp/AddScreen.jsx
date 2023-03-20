import {React,useState} from 'react'


export default function AddScreen(props) {
    class Item {
        color = 'red';
        constructor(name){
            this.name = name;
        }
    }
    const [current, setCurrent] = useState('');
    const addProduct = () => {
        const exist = props.prods.find((val)=>(val.name==='stereo'));
        if (current === '' || current === 'null') {
            alert('error');
            props.change();
        }
        else if (exist!==undefined && current === 'stereo') {
            alert('error');
            props.change();
        }
        else if (current === 'boiler' && props.type !== 'bathroom') {
            alert('error');
            props.change();
        }
        else if (props.prods.length >= 5) {
            alert('error');
            props.change();
        }
        else {
            let addProduct =  new Item(current)
            props.set([...props.prods, addProduct]);
            props.change();
        }
    }
    return (
        <div id='addScreen'>
            <select onChange={(e) => { setCurrent(e.target.value) }}>
                <option value='null'>choose product</option>
                <option value='ac'>AC</option>
                <option value='boiler'>boiler</option>
                <option value='stereo'>stereo</option>
                <option value='lamp'>lamp</option>
            </select>
            <button onClick={() => { addProduct() }}>add</button>
        </div>
    )
}


