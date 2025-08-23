import React from 'react';
import PopUpItemForm from './PopUpItemForm';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const Item = ({ item }) => {
  const { id, title } = item;
  return (
    <div className='flex items-center '>
        <div className='mr-75'>{title}</div>
        <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="bg-blue-500 text-white">Update</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 ml-10">
              <PopUpItemForm />
            </PopoverContent>
        </Popover>
        <Button variant="destructive" className="ml-2">Delete</Button>
    </div>
  )
}

export default Item
