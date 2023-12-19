import { useEffect } from "react";
import { useState } from "react";

const Main = () => {
  const [show, setShow] = useState(false)
  const [item, setItem] = useState([])

  const myShow = function() {
    setShow( prev => !prev)
  }

useEffect(() => {
  const getItem = async () => {
    const url = "https://fakestoreapi.com/products?limit=5";
    const items = await fetch(url);
    const itemApi = await items.json();

    setItem(itemApi)
  }
  getItem()
}, [])



  return (
    <div>
      <main className="main-container">
        <button onClick={myShow}>{show ? "Hide" : "Show"}</button>
        {show && <p>Tsukiden</p>}

        <div>
          {item.map((item, idx) => {
            console.log(item);
            return (
              <div key={idx}>
                <ul>{item.title}</ul>
                <ul>{item.description}</ul>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Main;
