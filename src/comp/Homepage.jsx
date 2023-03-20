import React from 'react'
import { Link } from 'react-router-dom'
import RoomBut from './RoomBut'
import './styles/homepage.css'

export default function Homepage(props) {

  return (
    <div id='homepage'>
      <Link to='/addRoom'><button id='addBut'>+</button></Link>
      <div id='allRooms'>
        {
          props.rooms.map((val, i ) => {
            return <RoomBut key={i} name={val.name} color={val.color} products={props.product} />
          })
        }
      </div>
    </div>
  )
}
