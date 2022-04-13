import cx from "classnames";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [todoItem, setTodoItem] = useState("");
  const [items, setItems] = useState([]);
  const { user , isLoading , error  } = useUser();

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  const handleAdd = () => {
    if (todoItem) {
      setItems([
        {
          id: uuidv4(),
          message: todoItem,
          done: false,
        },
        ...items,
      ]);

      setTodoItem("");
    }
  };

  const handleDone = (id) => {
    const _items = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }

      return item;
    });

    setItems(_items);
  };

  return (
    // login / logout links logic  
    <><div className="piii">
      {user ? (<a href="api/auth/logout"> Logout </a>
      ) : (
        <a href="api/auth/login">Login</a>
      )}
          {/* // login / logout links logic    */}

    </div><div className="w-3/4 mx-auto text-center">
        <div className="pt-12  ">
          <h1 className="text-4xl todohead">- Todo App -</h1>
          {/* <button type="button" className="instructionbtn">Instructions</button>  */}
          
          <img src="https://cdn-icons.flaticon.com/png/512/2158/premium/2158507.png?token=exp=1649882968~hmac=6f38f53e7a6fff22b09f289f9fbebee2"className="todoimg" ></img>
<img src="https://cdn-icons.flaticon.com/png/512/2158/premium/2158507.png?token=exp=1649882968~hmac=6f38f53e7a6fff22b09f289f9fbebee2"className="todoimg2" ></img>
        </div>
        <p className="todoqoutes 	 "> “Each day I will accomplish one thing on my to do list.”
</p>
  <p className="enter pt-8  ">-PRESS ENTER TO ADD TODO ITEM-</p>
        <div className="pt-12">
          <input
            type="text"
            value={todoItem}
            className="w-full rounded py-2 px-4 text-gray-900 "
            onChange={(e) => setTodoItem(e.target.value)}
            onKeyDown={handleEnter} />
        </div>

        <ul className="pt-12">
          {items
            .filter(({ done }) => !done)
            .map(({ id, message }) => (
              <li
                key={id}
                className={cx(styles.item)}
                onClick={() => handleDone(id)}
              >
                {message}
              </li>
            ))}

          {items
            .filter(({ done }) => done)
            .map(({ id, message }) => (
              <li
                key={id}
                className={cx(styles.item, styles.done)}
                onClick={() => handleDone(id)}
              >
                {message}
              </li>
            ))}
        </ul>
        


      </div></>
    
  );
};

export default Home;