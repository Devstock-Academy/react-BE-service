import { Header, List } from "./components";
import { LoginProvider } from "./context/LoginContext";

function App() {
  return (
    <>
      <Header>Budget tracker</Header>
      <LoginProvider>
        <List />
      </LoginProvider>
    </>
  );
}

export default App;
