import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const url = "http://localhost:3000/transactions";

export const useListData = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const { data, error, isLoading } = useFetch(
    `${url}/${selectedValue && `?type=${selectedValue}`}`
  );

  const handleSelectChange = (newValue) => {
    setSelectedValue(newValue);
  };

  return {
    data,
    error,
    isLoading,
    selectedValue,
    handleSelectChange,
  };
};
