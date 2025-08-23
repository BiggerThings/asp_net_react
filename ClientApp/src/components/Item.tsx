import React from 'react';
import { Button } from "@/components/ui/button"

const Item = () => {
  return (
    <div>
      <h4 className='font-bold'>Item Title</h4>
      <p className='text-sm text-gray-600'>Item description goes here.</p>
      <Button variant="outline" className="mt-2">Edit</Button>
    </div>
  )
}

export default Item
