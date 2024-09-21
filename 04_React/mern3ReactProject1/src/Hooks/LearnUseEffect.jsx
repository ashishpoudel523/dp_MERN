import { useEffect, useState } from "react";

function LearnUseEffect() {
  //1st Type - empty dependency array

  //yo chai 1st time use huda / website load huda matra execute hunxa
  //Runs just once (on mount). Good for setup. setting up subscriptions that don’t need to change.

  // useEffect(() => {
  //   console.log(`yo ho useEffect function`);
  // }, []);

  //------------------------------------------------
  const [like, setLike] = useState(0);

  const updateLike = () => {
    setLike(like + 1);
  };

  const updateDislike = () => {
    setLike(like - 1);
  };

  //2nd Type - with dependency arrays || state change garna lai
  //Runs only when certain values change. Good for reacting to specific changes.

  // useEffect(() => {
  //   console.log("2nd type");
  // }, [like]);

  //3rd Type - without dependency array - least used
  //Runs all the time (every render). Good for general updates.

  useEffect(() => {
    console.log(`3rd type useEffect`);
  });
  return (
    <>
      <h2>Like: {like} </h2>
      <button onClick={updateLike}>Like Me</button>
      <button onClick={updateDislike}>Unlike</button>
    </>
  );
}

export default LearnUseEffect;
