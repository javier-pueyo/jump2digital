import { useEffect } from "react";
import { PriceCard, Button, List } from "./components/index";
import plans from "./data/pricePlan.json"

function App() {
   
  return (
    <>
      <Button className="primary">Hola</Button>
      <List items={plans.features} type="starter" />
      <PriceCard />
    </>
  );
}

export default App;
