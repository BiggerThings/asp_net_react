import React from 'react';
import PopUpItemForm from './PopUpItemForm';
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const Item = ({ item }) => {
  const { id, title } = item;

  const handleDeleteButtonClick = () => {
    alert('Delete button clicked! ' + id);
  }

  return (
    <div className='flex items-center '>
        <div className='mr-75'>{title}</div>
        <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="bg-blue-500 text-white">Update</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 ml-10">
              <PopUpItemForm id={id} />
            </PopoverContent>
        </Popover>
        <Button variant="destructive" className="ml-2" onClick={handleDeleteButtonClick}>Delete</Button>
    </div>
  )
}

export default Item
