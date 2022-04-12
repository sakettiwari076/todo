import { useState } from "react";
import {v4 as uuidv4 } from 'uuid';
import cx from "classnames";

const index = () => {
  const [todoItem, settodoItem] = useState("");
  const [items, setItems] = useState([
  {
    id : "1234",
    message : " buy milk",
    done : false,
  },
  ]);
  // const hanldeAdd is function made to add items on clicking add buttons and it is under the if statement and
  // will add items only if some texts is inside the input 
  const handleAdd = () => {
    if(todoItem) {
    setItems([
      {
        id : uuidv4(),
        message : todoItem ,
        done : false ,
      },
      ...items,
    
    ]);
    settodoItem("");
  }
  };
  const handleToggle = (id) => {
    const _items = items.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          done: ! item.done,
          // done is changing the statuss of the item 
        };
      }
      return item;
    });
  };
return (
  <>
  <head>
  <link href="/dist/main.css" rel="stylesheet"/>

  </head>
 <div>
<h1 className=""> Todo App </h1>
<div>
  <input type = "text" value={todoItem } onChange={(e) => settodoItem (e.target.value)} />
  <button type = "button" onClick= {handleAdd} >Add</button>
</div>
<ul>
  {items
  .filter(({ done }) => !done)
  .map(({id , message , done}) => (
    <li key = {id} onClick={() =>handleToggle(id)} className-={cx( "item" , {done})} > 
    {message}
    </li>
  ))}
   {items
  .filter(({ done }) => !done)
  .map(({id , message , done}) => (
    <li key = {id} onClick={() =>handleToggle(id)} className-={cx( "item" , {done})} > 
    {message}
    </li>
  ))}
{/* <li> {todoItem}</li>  */}
</ul>
 </div>
  </>
);
} ;
export default index ;