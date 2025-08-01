import  ConditionalCompo  from './ConditionalCompo';
import Iteration from './Iteration';

function MyCompo({ name, age }: { name: string; age: number }) {
  
  return (
    <div className='ml-10 mt-10'>
      <h2>My Component Title</h2>
      <p>Hello there, {name}. You are {age} years old.</p>
      <ConditionalCompo />
      <Iteration />

    </div>
  );
}

export default MyCompo;