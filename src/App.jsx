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
            <div key={user.id} className='user'>
              <img
                src={`https://dummyimage.com/200x200/024983/ffffff&text=${user.website}`}
                alt=''
                className='image'
              />
              <h4 className='username'>{`${index + 1}. ${user.username}`}</h4>
              <table>
                <tr>
                  <td className='info-property'>User:</td>
                  <td className="info-value">{user.name}</td>
                </tr>
                <tr>
                  <td className='info-property'>Email:</td>
                  <td className="info-value">{user.email}</td>
                </tr>
                <tr>
                  <td className='info-property'>Company:</td>
                  <td className="info-value">{user.company.name}</td>
                </tr>
                <tr>
                  <td className='info-property'>City:</td>
                  <td className="info-value">{user.address.city}</td>
                </tr>
              </table>
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
