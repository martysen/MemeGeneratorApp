/*
Remember: side effects means actions that React cannot control like API calls or DB calls
useEffect is a hook that allows you to synch the behavior of these outside effects to the internal state of React:
like when to re-render components of the UI affected by 
outside change
*/

import React from "react";

export default function APITutorial() {
  const [starWarsdata, setStarWarsData] = React.useState({});

  //   //   fetch method to get the star wars api
  //   fetch("https://swapi.dev/api/people/")
  //     .then((res) => res.json())
  //     .then((data) => setStarWarsData(data))
  //     .catch((err) => console.log(`Some err encountered`));

  // Refactor code to manage side effects of API call
  /**
   * useEffect(callBack-Func, dependencies-Array)
   * callback func parameters will contain the code of how to manage side effect
   * This means the code that will execute and is outside the control of React
   * Like an API call.
   * This will allow the action of outside to be in synch with React local state
   *
   * Other IMP notes:
   * Order of execution:
   * -- first state is initialized
   * -- then the component loads i.e the div and all with the state
   * -- Finally useEffect() body executes and API call is made [default behavior]
   * -- this changes the state and React re-renders the component again
   * -- then it again comes back to useEffect; but since the dependency array is empty there is no more changes to track
   * -- as such no further execution of the useEffect body takes place.
   */
  React.useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => setStarWarsData(data))
      .catch((err) => console.log(`Some err encountered`));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(starWarsdata, null, 2)}</pre>
    </div>
  );
}
