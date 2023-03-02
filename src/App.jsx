import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  };

  console.log(
    users.map((user) => {
      return {
        name: user.name,
        username: user.username,
        email: user.email,
        city: user.address.city,
        address: {
          city: user.address.city,
        },
        website: user.website,
        company: {
          name: user.company.name,
        },
      };
    })
  );

  useEffect(() => {
    fetchUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  return (
    <>
      {users.length > 0 ? (
        <div className='container'>
          {users.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      ) : (
        <div>Usuarios no han sido encontrados</div>
      )}
    </>
  );
}

export default App;
