import { useState } from 'react'

const Iteration = () => {
    const [letters, setLetters] = useState(['a', 'b', 'c', 'd', 'e']);

    const reverseLetters = () => {
        setLetters([...letters].reverse());
    };

    const listItems = letters.map((letter, index) => {
        return <li key={index}>{letter}</li>;
    });
  
    return (
    <div className='mt-10'>
      <h2>Iteration Component</h2>
      <p>This component demonstrates iteration in React.</p>
      <button className="mt-3 px-8 py-2 rounded-sm border-solid bg-gray-300 text-white font-bold cursor-pointer" onClick={reverseLetters}>Reverse Letters</button>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default Iteration
