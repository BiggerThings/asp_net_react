import { useState } from 'react';

function MyCompo({ name, age }: { name: string; age: number }) {
  const [buttonClicked, setButtonClicked] = useState("Not clicked yet");
  
  const handleClick = () => {
    alert(`Hello ${name}`);
    setButtonClicked("Button clicked!");
  };
  
  return (
    <div>
      <h2>My Component Title</h2>
      <p>Hello there, {name}. You are {age} years old.</p>
      <button className="mt-3 px-8 py-2 rounded-sm border-solid bg-gray-300 text-white font-bold cursor-pointer"  onClick={handleClick}>{buttonClicked}</button>
    </div>
  );
}

export default MyCompo;