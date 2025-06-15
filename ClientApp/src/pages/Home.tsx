import { useEffect, useState } from 'react';
import axios from 'axios';
function Home() {
    const [message, setMessage] = useState('Loading...')

    useEffect(() => {
      axios.get('http://localhost:5238/api/hello')
        .then(response => setMessage(response.data))
        .catch(err => setMessage('Error: ' + err.message))
    }, [])

    return (
    <div className="mt-10">
        <h1 className="text-3xl font-bold text-center">Welcome to the Home Page</h1>
        <h1 className="text-3xl font-bold underline ">{message}</h1>
    </div>
  )
}

export default Home
