import { useEffect, useState } from "react";
import { Button, Header, List } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    return () => {};
  }, [count2]);

  return (
    <>
      <Header>Budget tracker</Header>
      <div>Licznik: {count}</div>
      <Button onClick={() => setCount((prev) => prev + 1)}>Dodaj</Button>
      <Button onClick={() => setCount2((prev) => prev + 1)}>Dodaj 2</Button>
      <List />
    </>
  );
}

export default App;
