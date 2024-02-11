import { useState } from 'react'
import './App.css'

function generateUsers0() {
  return [
    { name: 'lasha', lastName: 'vaxtangidze', age: 15, id: 3610, id2: 3681 },
    { name: 'dato', lastName: 'guramishvili', age: 12, id: 4238, id2: 7405 },
    { name: 'gurami', lastName: 'guramishvili', age: 27, id: 7112, id2: 2345 },
    { name: 'lasha', lastName: 'guramishvili', age: 52, id: 1948, id2: 9623 },
    { name: 'lasha', lastName: 'ipsumishvili', age: 18, id: 8366, id2: 3060 },
    { name: 'gurami', lastName: 'ipsumishvili', age: 44, id: 801, id2: 4614 },
    { name: 'dato', lastName: 'balxamishvili', age: 58, id: 438, id2: 2683 },
    { name: 'soso', lastName: 'ipsumishvili', age: 44, id: 2139, id2: 7966 },
    { name: 'dato', lastName: 'vaxtangidze', age: 8, id: 6947, id2: 261 },
    { name: 'gela', lastName: 'ivanishvili', age: 80, id: 434553, id2: 3444 },

  ]
}

const App = () => {
  const [users, generateUsers] = useState(generateUsers0())

  let usersCount = users.length;
  document.title = `${usersCount} users left`;

  function DeleteUsers() {
    let min = 0;
    let max = users.length;

    let random = Math.floor(Math.random() * (max - min) + min);

    generateUsers(users.filter((_, index) => index !== random))
  }

  return (
    <>
      <button onClick={DeleteUsers}>
        Delete Random
      </button>

      <div className='user_div'>
        {users.map(users => {
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