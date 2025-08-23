import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const handleButtonClick = () => {
  alert('Button clicked!');
}

const PopUpItemForm = () => {
  return (
    <div className='flex w-full max-w-sm items-center gap-2 mb-6'>
      <Input type="text" placeholder="Add Title" />
      <Button variant="outline" className="bg-blue-500 text-white" onClick={handleButtonClick}>Update</Button>
    </div>
  )
}

export default PopUpItemForm
