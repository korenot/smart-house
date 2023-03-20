import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles/roomBut.css'
export default function RoomBut(props) {
    const nav = useNavigate();
    const moveToRoom = (name) => {
        nav(`/room-${name}`)
    }
    return (
        <button className='roomBut' onClick={() => (moveToRoom(props.name))} style={{ backgroundColor: props.color }} >{props.name}</button >
    )
}
