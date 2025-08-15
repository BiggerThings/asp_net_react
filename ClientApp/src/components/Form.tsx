import { useState, useEffect, useRef } from 'react'

const Form = () => {
    const [txt, setTxt] = useState('Jack');
    const inputRef = useRef(txt);

    useEffect(() => {
        inputRef.current.focus();
        console.log('Input focused on component mount');
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTxt(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        alert(`Submitted: ${txt}`);
        e.preventDefault(); // Prevent page reload
    };
  
    return (
    <div className='ml-10 mt-10'>
      <h2>Form Component</h2>
      <p>This component demonstrates a form in React.</p>
      <form className="mt-4" onSubmit={handleSubmit}>
        <input type="text" value={txt} ref={inputRef} onChange={handleChange} className="border p-2 rounded" />
        <input type="submit"  value="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" />
      </form>
    </div>
  )
}

export default Form
