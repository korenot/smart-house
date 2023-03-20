import './App.css';
import Title from './comp/Title';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './comp/Homepage';
import AddRoom from './comp/AddRoom';
import { useState } from 'react';
import Room from './comp/Room';

function App() {
  class Rooms{
    products = Array;
    constructor(type ,name ,color){
      this.type =type ;
      this.name =name ; 
      this.color = color;
    }
  }
  const [allRooms, setAllRooms] = useState([]);
  const addRoom = (type, name, color) => {
    let newRoom = new Rooms (type, name ,color)
    setAllRooms([...allRooms, newRoom])
  }
  
  return (
    <div className="App">
      <Title />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage rooms={allRooms} />} />
          <Route path='/addRoom' element={<AddRoom setRooms={setAllRooms} rooms={allRooms} add={addRoom} />} />
          {allRooms.map((val,i) => {
            return <Route key={i} path={`room-${val.name}`} element={<Room room = {val}/>} />
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
