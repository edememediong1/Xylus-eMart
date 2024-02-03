import Navbar from "./Components/navbar"
import market from "./data/json"
import Product from "./Components/products"
import  "./index.css";
import "./App.css";


function App() {
  const products = market.map((item) => {
    return <Product {...item} />
  })

  return (
    <section>
      <header>
        <Navbar/>
      </header>
      <main className="product-display">
      {products}
      </main>
    </section>
  );

}

export default App
