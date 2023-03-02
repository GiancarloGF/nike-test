import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  };


  useEffect(() => {
    fetchUsers().then((users) => {
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
      setUsers(users);
    });
  }, []);

  return (
    <>
      {users.length > 0 ? (
        <div className='container'>
          {users.map((user, index) => (
            <div key={user.id} className="user">
              <img src={`https://dummyimage.com/200x200/024983/ffffff&text=${user.website}`} alt="" className='image'/>
              <h4 className='username'>{`${index + 1}. ${user.username}`}</h4>
              <ul className='info'>
                <li>user: <span>{user.name}</span></li>
                <li>Email: <span>{user.email}</span> </li>
                <li>Company: <span>{user.company.name}</span></li>
                <li>City: <span>{user.address.city}</span></li>
              </ul>
              </div>
          ))}
        </div>
      ) : (
        <div>Usuarios no han sido encontrados</div>
      )}
    </>
  );
}

export default App;
