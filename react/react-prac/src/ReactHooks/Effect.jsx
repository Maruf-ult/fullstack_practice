import React, { useEffect, useState } from 'react';

function Effect() {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((posts) => setData(posts));
  }, [userId]); 

  return (
    <div>
      <h1>Posts for User {userId}</h1>
      <button onClick={() => setUserId((prev) => prev + 1)}>Next User</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Effect;