import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  PopUpItemForm  from './PopUpItemForm'
import Item from './Item';

const Items = () => {
    const [players, setPlayers] = useState([]);
    const [newPlayer, setNewPlayer] = useState({ title: ''});

    const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
        setNewPlayer({ title: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newPlayer.title) return;

        await axios.post('http://localhost:5238/api/Items', newPlayer);
        setNewPlayer({ title: '' });
    }

    useEffect(() => {
        const getPlayers = async () => {
            const response = await axios.get('http://localhost:5238/api/Items');
            const data = response.data;
            setPlayers(data);
        }
        getPlayers();
    }, [newPlayer]);
    return (
    <div className='mt-10'>
      <h3 className='text-lg font-semibold mb-2'>Items List</h3>
      <Item item={{ title: "Hey", id: "1" }}/>

      <form>
        <input 
          type="text" 
          value={newPlayer.title} 
          onChange={handleChange} 
          placeholder="Add new item"
          className="border p-2 rounded w-80"
        />
        <input type="submit" value="Add"
         className="text-white bg-blue-500 border p-2 rounded ml-2"
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
