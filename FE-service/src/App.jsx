import { Button, Header, List } from "./components";
import { useState } from "react";
function App() {
  const [showList, setShowList] = useState(true);
  return (
    <>
      <Header>Budget tracker</Header>
      <Button onClick={() => setShowList((prev) => !prev)}>
        Show/Hide List
      </Button>
      {showList && <List />}
    </>
  );
}

export default App;
