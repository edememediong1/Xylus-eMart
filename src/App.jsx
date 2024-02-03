import { useState } from "react";
import Navbar from "./Components/navbar"
import market from "./data/json"
import Product from "./Components/products"
import  "./index.css";
import "./App.css";


function MyButton({onSelect, count}){

  return(
    <div>
        <button  onClick={onSelect} >The Count is {count}</button>
    </div>

  )
}


function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1)
  }

  const products = market.map((item) => {
    return <Product key={item.product_id} {...item} />
  })
  return (
    <section>
      <header>
        <Navbar/>
      </header>
      <main className="product-display">
      {products}
      <MyButton onSelect={handleClick} count={count}/>
      <MyButton onSelect={handleClick} count={count}/>
      </main>
    </section>
  );

}

export default App
