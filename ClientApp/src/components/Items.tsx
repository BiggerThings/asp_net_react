import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Items = () => {
    const [players, setPlayers] = useState([]);
    const [newPlayer, setNewPlayer] = useState({ title: ''});

    const handleChange = (e) => {
        setNewPlayer({ title: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newPlayer.title) return;

        const response = await axios.post('http://localhost:5238/api/Items', newPlayer);

        if (response.status === 200 || response.status === 204) {
            alert('Pirate added successfully!');
            setNewPlayer({ title: '' });
        }
    }

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

      <form>
        <input 
          type="text" 
          value={newPlayer.title} 
          onChange={handleChange} 
          placeholder="Add new item"
          className="border p-2 rounded"
        />
        <input type="submit" value="Add"
         className="text-white bg-blue-500 border p-2 rounded"
         onClick={handleSubmit}
        />
      </form>

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
