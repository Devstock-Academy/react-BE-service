import { useState, useEffect, useContext } from "react";
import { NotificationContext } from "../../context/NotificationContext";

const url = "http://localhost:3000/transactions";

const useListData = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [balanceData, setBalanceData] = useState(null);
  const { handleNotification } = useContext(NotificationContext);

  const handleSelectChange = (newValue) => {
    setSelectedValue(newValue);
  };

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
      .catch(() => {
        setIsLoading(false);
      });
    return () => {
      isCancelled = true;
    };
  }, [selectedValue, balanceData, handleNotification]);

  return {
    data,
    isLoading,
    selectedValue,
    handleSelectChange,
    balanceData,
  };
};

export default useListData;
