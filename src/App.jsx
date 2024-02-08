import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const names = ['dato', 'lasha', 'gurami', 'soso', 'gela', 'tato'];
  const lastName = ['balxamishvili', 'guramishvili', 'vaxtangidze', 'ipsumishvili', 'lalalala', 'ugydrhyisnfj'];

  let randomizer = Math.floor(Math.random() * 5);
  let randomizer2 = Math.floor(Math.random() * 5);
  let randomAge = Math.floor(Math.random() * 60);

  const [users, generateUsers] = useState({ name: names[randomizer], lastName: lastName[randomizer2], age: randomAge, id: Math.floor(Math.random() * 10000), id2: Math.floor(Math.random() * 10000) },)

  function addUsers() {
    generateUsers({ name: names[randomizer], lastName: lastName[randomizer2], age: randomAge, id: Math.floor(Math.random() * 10000), id2: Math.floor(Math.random() * 10000) },);
    console.log(users);
  }

  let usersContainer = [users];
  usersContainer + users
  return (
    <>
      <button onClick={addUsers}>
        generateUsers
      </button>

      <div className='user_div'>
        {usersContainer.map(users => {
          return (
            <button key={users.id2}>
              <p key={users.name}><span className='span_user'>name: </span>  {users.name}</p>
              <p key={users.lastName}><span className='span_user'>last name: </span>  {users.lastName}</p>
              <p key={users.age}><span className='span_user'>age: </span> {users.age}</p>
              <p key={users.id}><span className='span_user'>id: </span>  {users.id}</p>
            </button>
          )
        })}
      </div>

    </>
  )
}

export default App