import {useEffect, useState} from "react";
import Details from "./Details";
import User from "./User";

export default function List() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');

        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();
        data.map(item => item.active = '');
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  const handlerClick = event => {
    const element = event.target;
    const newUsers = [];
    users.forEach(item => {
      if (Number(element.id) === item.id) {
        item.active = 'users__active';
        setUser(item);
      } else {
        item.active = '';
      }

      newUsers.push(item);
    });

    setUsers(newUsers);
  };

  return (
    <>
      <div className="users">
        {users.map(item => <User key={item.id} item={item} click={handlerClick}/>)}
      </div>
      <div className="user"></div>
      <Details info={user}/>
    </>
  );
}