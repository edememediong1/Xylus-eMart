import Navbar from "./Components/navbar"
import market from "./data/json"
import Product from "./Components/products"


function App() {
  const products = market.map((item) => {
    return (
      <div key={item}>
        <li>{item.name}</li>
        <li>{item.description}</li>
        <img src={item.image} alt="cake" />
      </div>
    )
  })

  return (
    <section>
      <header>
        <Navbar/>
      </header>
      {products}
    </section>
  );

}

export default App
