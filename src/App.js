import logo from './logo.svg';
import './App.css';
import Product from './Components';
import products from './assets/products.json';

function App() {
  return (
    <div className={"container"}>
    <main className={"main"}>
      <h1>
        E-Commerce in React and SnipCart
      </h1>
      <div className={"grid"}>
        {
          products.map((product, i) => <Product {...product} key={i}/>)
        }
      </div>
    </main>
    <div
        id="snipcart"
        data-api-key="NjA1YjZjOWUtMjRlMS00Nzg4LTk5OTktMjkxZDVkOTBiYjljNjM4MTk4MjM5MDE4MzcwNzUx" hidden
    >
    </div>
  </div>
  );
}

export default App;
