// import { useState } from 'react';

import { useEffect, useState } from 'react';

export default function UseEffectFetchingData() {
  // fetch("URL", optionsObject)
  // method GET
  // useEffect encapsulate the code to run when we want

  const [user, setUser] = useState();
  const [toggle, setToggle] = useState(true);

  async function getUser() {
    const response = await fetch('https://randomuser.me/api/', {});
    const userResponse = await response.json();

    setUser(userResponse);
  }

  useEffect(() => {
    getUser();
  }, [toggle]);

  return !user?.results[0] ? (
    <div>loading...</div>
  ) : (
    <div>
      <div>name: {user.results[0].name.first}</div>
      <div>last name: {user.results[0].name.last}</div>
      <div>email: {user.results[0].email}</div>
      <button onClick={() => setToggle(!toggle)}>get new user</button>
    </div>
  );

  // if (!user?.results[0]) {
  //   return <div>loading...</div>;
  // } else {
  //   return (
  //     <div>
  //       <div>name: {user.results[0].name.first}</div>
  //       <div>last name: {user.results[0].name.last}</div>
  //       <div>email: {user.results[0].email}</div>
  //     </div>
  //   );
  // }
}
