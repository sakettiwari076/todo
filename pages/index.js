import { useState } from "react";
const index = () => {
  const [todoItem, settodoItem] = useState("");
  const [items, setItems] = useState([
    "Buy milk",
    "Buy rice",
    "Buy clothes"
  ]);
  // const hanldeAdd is function made to add items on clicking add buttons 
  const handleAdd = () => {
    if(todoItem) {
    setItems([
      todoItem ,
      ...items,
    
    ])
    settodoItem("");
  }
  };
return (
  <>
 <div>
<h1>Todo App </h1>
<div>
  <input type = "text" value={todoItem } onChange={(e) => settodoItem (e.target.value)} />
  <button type = "button" onClick= {handleAdd} >Add</button>
</div>
<ul>
  {items.map((item) => (
    <li key = {item} > {item}</li>
  ))}
{/* <li> {todoItem}</li>  */}
</ul>
 </div>
  </>
);
} ;
export default index ;