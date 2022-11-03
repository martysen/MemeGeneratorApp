import React from "react";

// Component without React useState()
// function ReactStateTutorial() {
//   const tempArray = ["ArrItem 1", "ArrItem 2"];
//   const newArrayElement = tempArray.map((item) => <p key={item}> {item} </p>);

//   function addItem() {
//     const newItemText = `ArrItem ${tempArray.length + 1}`;
//     tempArray.push(newItemText);
//     console.log(tempArray);
//   }

//   return (
//     <div>
//       <button onClick={addItem}>Add Item</button>
//       {newArrayElement}
//     </div>
//   );
// }

// Component with React useState()
function ReactStateTutorial() {
  const [items, setItems] = React.useState(["ArrItem 1", "ArrItem 2"]);

  function addItem() {
    const newItemText = `ArrItem ${items.length + 1}`;
    setItems((prevState) => [...prevState, newItemText]);
  }

  const newItemsElement = items.map((item) => <p key={item}> {item} </p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {newItemsElement}
    </div>
  );
}

export default ReactStateTutorial;
