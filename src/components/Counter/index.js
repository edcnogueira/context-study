import React, { useContext } from "react";

import { useCount } from "../../context/Count";

export default function Counter() {
  const { count, setCount } = useCount();
  return (
    <div>
      <span>
        <b>Count: {count} </b>
      </span>
      <br />
      <button onClick={() => setCount(count + 1)}>Increse</button>
    </div>
  );
}
