import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NotificationContext } from "../../context/NotificationContext";
import { Header, Notification } from "../../components";
import styles from "./Layout.module.css";

const routes = [
  { name: "Home", id: 1, path: "/" },
  { name: "Podsumowanie", id: 2, path: "summary" },
  { name: "Organizer", id: 3, path: "organizer" },
];

const Layout = ({ children }) => {
  const { notification, notificationVariant } = useContext(NotificationContext);

  return (
    <>
      {notification && (
        <Notification variant={notificationVariant} message={notification} />
      )}
      <Header>Budget tracker</Header>
      <div className={styles.layoutBody}>
        <div className={styles.navBar}>
          {routes.map(({ name, id, path }) => (
            <NavLink key={id} to={path}>
              {({ isActive }) => (
                <div className={isActive ? styles.active : ""}>{name}</div>
              )}
            </NavLink>
          ))}
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
