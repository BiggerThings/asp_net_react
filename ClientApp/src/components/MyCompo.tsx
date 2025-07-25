function MyCompo({ name, age }: { name: string; age: number }) {
  const handleClick = () => {
    alert(`Hello ${name}`);
  };
  
  return (
    <div>
      <h2>My Component Title</h2>
      <p>Hello there, {name}. You are {age} years old.</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default MyCompo;