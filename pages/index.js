import { useState } from "react";
const index = () => {
  const [items, setItems] = useState([
    "Buy milk",
    "Buy rice",
    "Buy clothes"
    
  ]);
return (
  <>
 <div>
<h1>Todo App </h1>
<div>
  <input type = "text" />
  <button type = "button">Add</button>
</div>
<ul>
  {items.map((item) => (
    <li key = {item} > {item}</li>
  ))}

</ul>
 </div>
  </>
);
} ;
export default index ;