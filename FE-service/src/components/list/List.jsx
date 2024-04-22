import { useEffect, useState } from "react";

import { countBalance } from "../../utils/balance";
import { Select } from "../../components";
import ListElement from "./ListElement";
import styles from "./List.module.css";

const options = [
  { value: "", label: "Wszystko" },
  { value: "expense", label: "Wydatki" },
  { value: "income", label: "Przychody" },
];

const url = "http://localhost:3000/transactions";

const List = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [data, setData] = useState(null);

  const handleSelectChange = (newValue) => {
    setSelectedValue(newValue);
  };

  useEffect(() => {
    const handleResize = () => {
      console.log("resize window");
    };
    alert("mount component");
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      alert("unmount");
    };
  }, []);

  useEffect(() => {
    fetch(`${url}/${selectedValue && `?type=${selectedValue}`}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [selectedValue]);

  return (
    <div className={styles.list}>
      <div className={styles.listHeader}>
        <h2>Balance: {data ? countBalance(data) : 0} $</h2>
        <Select
          options={options}
          onChange={handleSelectChange}
          value={selectedValue}
        />
      </div>
      {data?.map((item) => (
        <ListElement listElement={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
