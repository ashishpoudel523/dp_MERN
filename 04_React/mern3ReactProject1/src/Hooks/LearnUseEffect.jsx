import { useEffect, useState } from "react";

function LearnUseEffect() {
  //1st Type - without dependency array - least used
  //Runs all the time (every render). Good for general updates.

  // useEffect(() => {
  //   console.log(`1st type useEffect without dependAray. Run on every render`);
  // });

  //2nd Type - empty dependency array

  //yo chai 1st time use huda / website load huda matra execute hunxa
  //Runs just once (on mount). Good for setup. setting up subscriptions that don’t need to change.

  // useEffect(() => {
  //   console.log(`Run in 1st render useEffect`);
  // }, []);

  //------------------------------------------------
  const [like, setLike] = useState(0);

  const updateLike = () => {
    setLike(like + 1);
  };

  const updateDislike = () => {
    setLike(like - 1);
  };

  //3rd Type - with dependency arrays || state change garna lai
  //Runs everytime only when certain values changes inside dependency array hai ta. Good for reacting to specific changes.

  useEffect(() => {
    console.log(
      "3rd type with dependency array and something state has changed"
    );
  }, [like]);

  return (
    <>
      <h2>Like: {like} </h2>
      <button onClick={updateLike}>Like Me</button>
      <button onClick={updateDislike}>Unlike</button>
    </>
  );
}

export default LearnUseEffect;
