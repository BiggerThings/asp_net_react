import { useState } from 'react'

const ConditionalCompo = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };

    let element;
    if (toggle) {
        element = <p className="text-green-500">The toggle is ON!</p>;
    } else {
        element = <p className="text-red-500">The toggle is OFF!</p>;
    }
  
    return (
    <div>
      <h2>Conditional Render Component</h2>
      {element}
        <button className="mt-3 px-8 py-2 rounded-sm border-solid bg-gray-300 text-white font-bold cursor-pointer" onClick={handleToggle}>
          Toggle State
        </button>
    </div>
  )
}

export default ConditionalCompo
