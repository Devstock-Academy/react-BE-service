import { useContext } from "react";
import { Header, List, Notification } from "./components";
import { NotificationContext } from "./context/NotificationContext";

function App() {
  const { notification, notificationVariant } = useContext(NotificationContext);
  return (
    <>
      {notification && (
        <Notification variant={notificationVariant} message={notification} />
      )}
      <Header>Budget tracker</Header>
      <List />
      <footer>Budget tracker ©</footer>
    </>
  );
}

export default App;
