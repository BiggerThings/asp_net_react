import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  
  return (
    <div className="mt-10">
        <h1 className="text-3xl font-bold text-center">Welcome to the Counter Page</h1>

        <div className="flex items-center justify-center mt-8">
          <button className="bg-red-500 px-4 py-1 rounded-lg text-white font-bold" onClick={decrement}>
          -
          </button>
          <span className="mx-4">{count}</span>
          <button className="bg-green-500  px-4 py-1 rounded-lg text-white  font-bold" onClick={increment}>
            +
          </button>
        </div>

    </div>
  )
}

export default Counter
