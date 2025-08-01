import  ConditionalCompo  from './ConditionalCompo';

function MyCompo({ name, age }: { name: string; age: number }) {
  
  return (
    <div>
      <h2>My Component Title</h2>
      <p>Hello there, {name}. You are {age} years old.</p>
      <ConditionalCompo />
    </div>
  );
}

export default MyCompo;