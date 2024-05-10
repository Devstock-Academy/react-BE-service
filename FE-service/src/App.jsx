import { useContext } from "react";
import { NotificationContext } from "./context/NotificationContext";
import { Header, Notification, FeatureActivities } from "./components";

function App() {
  const { notification, notificationVariant } = useContext(NotificationContext);

  return (
    <>
      {notification && (
        <Notification variant={notificationVariant} message={notification} />
      )}
      <Header>Budget tracker</Header>
      <FeatureActivities />
    </>
  );
}

export default App;
