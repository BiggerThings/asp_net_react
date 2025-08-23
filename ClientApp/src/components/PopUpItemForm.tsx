import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const PopUpItemForm = ({ id }: { id: number }) => {
  const [title, setTitle] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleButtonClick = (text: string) => {
    alert('Button clicked! ' + text);
    setTitle('');
  }

  return (
    <div className='flex w-full max-w-sm items-center gap-2 mb-6'>
      <Input type="text" placeholder="Add Title" onChange={handleInputChange} />
      <Button variant="outline" className="bg-blue-500 text-white" onClick={() => handleButtonClick(id + " " + title)}>Update</Button>
    </div>
  )
}


export default PopUpItemForm
