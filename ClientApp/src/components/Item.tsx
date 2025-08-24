import { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"


const Item = ({ item }: { item: { id: number; title: string } }) => {
  const { id, title } = item;

  const [titleToUpdate, setTitleToUpdate] = useState('');

  const handlePopUpItemInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleToUpdate(e.target.value);
  }

  const handlePopUpItemClick = (text: string) => {
    alert('Button clicked! ' + text);
    setTitleToUpdate('');
  }

  const handleDeleteButtonClick = () => {
    alert('Delete button clicked! ' + id);
  }

  return (
    <div className='flex items-center'>
        <div className='mr-75'>{title}</div>
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="bg-blue-500 text-white">Update</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 ml-10">
                <div className='flex w-full max-w-sm items-center gap-2 mb-6'>
                    <Input type="text" placeholder="Add Title" onChange={handlePopUpItemInputChange} />
                    <Button variant="outline" className="bg-blue-500 text-white" onClick={() => handlePopUpItemClick(id + " " + titleToUpdate)}>Update</Button>
                </div>
            </PopoverContent>
        </Popover>
        <Button variant="destructive" className="ml-2" onClick={handleDeleteButtonClick}>Delete</Button>
    </div>
  )
}

export default Item
