import  Items from './Items';
function MyCompo({ name, age }: { name: string; age: number }) {
  
  return (
    <div className='ml-10 mt-10'>
      <h2>My Component Title</h2>
      <p>Hello there, {name}. You are {age} years old.</p>
      <Items />

    </div>
  );
}

export default MyCompo;