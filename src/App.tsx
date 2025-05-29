import {useEffect, useState,  type ChangeEvent} from 'react'
import './App.css'
import {Loader} from "./components/Loader/Loader.tsx";
import {List} from "./components/List/List.tsx";

export interface User {
    email: string
    id: number
    phone: string
    username: string
    website: string
}
function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Ben')
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([])
  const [nameFilter, setNameFilter] = useState('')

  const callback = () => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users').then(async (response) => {
            const data = await response.json()
            setUsers(data)
            setIsLoading(false)
        } )

    }

  useEffect(callback , [])

  if (isLoading) {
      return <Loader />
  }

  const setFilter = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event?.currentTarget?.value
      setNameFilter(value)
  }

  const filteredUser = users.filter((user) => user?.username?.toLowerCase().includes(nameFilter.toLowerCase()))

  return (
    <>
        <h1>This is some List</h1>
        <div>
            Filter:
            <input type="text" onChange={setFilter} />
        </div>
        <div>
            <List items={filteredUser} />
        </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => { setCount((count) => count + 1); setName('Tim')}}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
          <p>Name is: {name}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
