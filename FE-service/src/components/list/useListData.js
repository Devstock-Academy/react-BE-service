import { useState, useEffect, useContext, useCallback } from "react";
import { NotificationContext } from "../../context/NotificationContext";

const url = "http://localhost:3000/transactions";

const useListData = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [balanceData, setBalanceData] = useState(null);
  const { setNotification, setNotificationVariant } =
    useContext(NotificationContext);

  const handleSelectChange = (newValue) => {
    setSelectedValue(newValue);
  };

  const handleNotification = useCallback(
    (error) => {
      setNotificationVariant("primary");
      setNotification(error);
      setTimeout(() => setNotification(null), 3000);
    },
    [setNotification, setNotificationVariant]
  );

  useEffect(() => {
    let isCancelled = false;
    setIsLoading(true);
    fetch(`${url}/${selectedValue && `?type=${selectedValue}`}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Coś poszło nie tak...");
      })
      .then((response) => {
        if (isCancelled) {
          return;
        }
        setIsLoading(false);
        setData(response);
        !balanceData && setBalanceData(response);
        handleNotification("success");
      })
      .catch((e) => {
        setIsLoading(false);

        setError(e);
      });
    return () => {
      isCancelled = true;
    };
  }, [selectedValue, balanceData, handleNotification]);

  return {
    data,
    error,
    isLoading,
    selectedValue,
    handleSelectChange,
    balanceData,
  };
};

export default useListData;
