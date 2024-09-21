import { useState } from "react";

/*
  without array destructuring:-
  const bucket = useState(10);
  const data =  bucket[0]
  const setData = bucket[1] 

  with array destructuring
  const [data, setData] = useState(10);
  console.log(data);
  console.log(setData);
*/

const LearnUseState = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [data, setData] = useState({
    name: "Aemond",
    house: "Targaryan",
    age: 19,
  });
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <h1>{data.name}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
      <h1>{count2}</h1>
    </>
  );
};

export default LearnUseState;
