import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Items = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const getPlayers = async () => {
            const response = await axios.get('http://localhost:5238/api/Items');
            const data = response.data;
            setPlayers(data);
        }
        getPlayers();
    }, []);
    return (
    <div className='mt-10'>
      <h3 className='text-lg font-semibold mb-2'>Items List</h3>
      
      <ul>
        {players && players.map((player) => (
            <li key={player.id} className='mb-1'>
                <span className='font-bold'>{player.title}</span>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Items
