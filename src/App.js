import { useState } from 'react';
import './index.css';

function App() {

  const [items, setItems] = useState("");
  const [status, setStatus] = useState(false);

  async function getItems(){
    let request = await fetch("http://localhost:3000");
    let response = await request.json();

    setItems(response.fridgeItems)

    setStatus(true);
  }

  getItems()

    return (
    <div className="App">

      <div className="fridgeyContainer">
      <h1>FRIDGEY</h1>
        {status &&
          items.map((fridgeItem, index) => {
            return <div className='itemContainer' key={index}>
              <h3>NAME: {fridgeItem.name}</h3>
              <h3>TYPE: {fridgeItem.type}</h3>
              <h3>QUANTITY: {fridgeItem.quantity}</h3>
            </div>
          })
        }
      </div>
        
    </div>
  );
}

export default App;
