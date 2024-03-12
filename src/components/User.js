import React, { useState } from "react";
import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(10);
  return (
    <div className="user-card">
      <h1>count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count increase
      </button>
      <h1>count2:{count2}</h1>
      <h1>{props.name}</h1>
      <h2>Email: sujalviranisv@gmail.com</h2>
      <h3>Location: Ahmedabad</h3>
    </div>
  );
};

export default User;
