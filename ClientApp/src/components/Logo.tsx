import { Link } from 'react-router';

function Logo() {
  return (
    <Link to="/">
        <img
            className='w-12'
            alt='Logo'
            src='vite.svg'
        />
      
    </Link>
  )
}

export default Logo
