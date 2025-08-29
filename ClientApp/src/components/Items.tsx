import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"

const Items = () => {
    const [players, setPlayers] = useState([]);
    const [newPlayer, setNewPlayer] = useState({ title: ''});
    const [titleToUpdate, setTitleToUpdate] = useState('');

    const handlePopUpItemInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitleToUpdate(e.target.value);
    }

    const handlePopUpItemClick = (id: number, text: string) => {
      alert('Update item button clicked! at ' + id + ' with text: ' + text);
      setTitleToUpdate('');
    }

    const handleDeleteButtonClick = (id: number) => {
      alert('Delete item button clicked! at ' + id);
    }

    const handleNewPlayerChange = (e: React.FormEvent<HTMLFormElement>) => {
      setNewPlayer({ title: e.target.value });
    }

    const handleNewPlayerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      <form>
        <input 
          type="text" 
          value={newPlayer.title} 
          onChange={handleNewPlayerChange} 
          placeholder="Add new item"
          className="border p-2 rounded w-80"
        />
        <input type="submit" value="Add"
         className="text-white bg-blue-500 border p-2 rounded ml-2"
         onClick={handleNewPlayerSubmit}
        />
      </form>

      <ul>
        {players && players.map((player) => (
            <li key={player.id} className='mb-1'>
                {/* <Item item={player} /> */}
                <div className='flex items-center'>
                  <div className='w-1/6'>{player.title}</div>
                  <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className="bg-blue-500 text-white">Update</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 ml-10">
                        <div className='flex w-full max-w-sm items-center gap-2 mb-6'>
                            <Input type="text" placeholder="Add Title" onChange={handlePopUpItemInputChange} />
                            <Button variant="outline" className="bg-blue-500 text-white" onClick={() => handlePopUpItemClick(player.id, titleToUpdate)}>Update</Button>
                        </div>
                    </PopoverContent>
                  </Popover>
                  <Button variant="destructive" className="ml-2" onClick={() => handleDeleteButtonClick(player.id)}>Delete</Button>
                </div>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Items
