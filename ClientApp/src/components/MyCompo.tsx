function MyCompo({ name, age }: { name: string; age: number }) {
  const handleClick = () => {
    alert(`Hello ${name}`);
  };
  
  return (
    <div>
      <h2>My Component Title</h2>
      <p>Hello there, {name}. You are {age} years old.</p>
      <button className="mt-3 px-8 py-2 rounded-sm border-solid bg-gray-300 text-white font-bold cursor-pointer"  onClick={handleClick}>Handle Event</button>
    </div>
  );
}

export default MyCompo;