import { useEffect, useState } from 'react';
import './App.css';
import wizardData from './assets/wizard-data.json';
import WizardInfo from './components/wizard';
import Filter from './components/Filter';
import Sort from './components/Sort';
import Cart from './components/Cart';

wizardData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [filted, setFiltered] = useState([]);
  const [wizardOrig, setWizardOrig] = useState([]);
  const [activeHouse, setActiveHouse] = useState("All");
  const [activeGender, setActiveGender] = useState("All");
  const [activeSkill, setActiveSkill] = useState("All");
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    fetchWizard();
  }, []);
  const fetchWizard = async () => {
    const wizard = wizardData;
    setFiltered(wizard);
    setWizardOrig(wizard);
    setActiveGender(wizard);
  };

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => 
        x.id === product.id ? {...exist, qty: exist.qty+1}:x)
      );
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App row">
      <div className= "title"/>
      <h1>Please select 5 Cards. </h1>
        <h2>You have 100,000 Galleons.</h2>
      <aside className = "column left">
        <div className="wizard-card">
          <Sort 
            filted={filted}
            setFiltered={setFiltered}
            />
         <Filter
            item={wizardOrig} 
            setFiltered={setFiltered} 
            activeHouse={activeHouse} 
            setActiveHouse={setActiveHouse}
            activeGender={activeGender}
            setActiveGender={setActiveGender}
            activeSkill={activeSkill}
            setActiveSkill={setActiveSkill}
            />
        </div>
      </aside>

      <main className="column middle">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filted.map((item) => (
          <WizardInfo key={item.id} item={item} onAdd={onAdd}/>
        ))}
      </div>
      </main>
      <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Cart>
    </div>
  );
}

export default App;
