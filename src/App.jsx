import Navbar from "./Components/navbar"
import market from "./data/json"


function App() {
  const products = market.map((item) => {
    return (
      <div key={item}>
        <li>{item.name}</li>
        <li>{item.description}</li>
        <img src={item.image} alt="cake" style= >
      </div>
    )
  })

  return (
    <section>
      <header>
        <Navbar/>
      </header>
      <div>{products}</div>
    </section>
  );

}

export default App
