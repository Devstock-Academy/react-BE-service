import { useMemo, useState } from "react";
import { countBalance } from "../../utils/balance";
import { Button, Select } from "../../components";
import ListElement from "./ListElement";
import Loading from "./Loading";
import useListData from "./useListData";
import styles from "./List.module.css";
import ListHeader from "./ListHeader";

const options = [
  { value: "", label: "Wszystko" },
  { value: "expense", label: "Wydatki" },
  { value: "income", label: "Przychody" },
];

const List = () => {
  const [isListVisible, setIsListVisible] = useState(true);
  const { data, isLoading, selectedValue, handleSelectChange, balanceData } =
    useListData();

  const balanceInfo = useMemo(() => countBalance(balanceData), [balanceData]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.bodyContent}>
      <div className={styles.listHeader}>
        <ListHeader balanceInfo={balanceInfo} />
        <Select
          options={options}
          onChange={handleSelectChange}
          value={selectedValue}
        />
        <Button onClick={() => setIsListVisible((prev) => !prev)}>
          {isListVisible ? "Ukryj listę" : "Pokaż listę"}
        </Button>
      </div>
      <div className={styles.listWrapper}>
        {isListVisible && (
          <div className={styles.list}>
            {data?.map((item) => (
              <ListElement listElement={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
