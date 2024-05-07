import { useMemo } from "react";
import { countBalance } from "../../utils/balance";
import { Select } from "../../components";
import ListElement from "./ListElement";
import ErrorInfo from "./ErrorInfo";
import Loading from "./Loading";
import useListData from "./useListData";
import styles from "./List.module.css";

const options = [
  { value: "", label: "Wszystko" },
  { value: "expense", label: "Wydatki" },
  { value: "income", label: "Przychody" },
];

const List = () => {
  const {
    data,
    balanceData,
    error,
    isLoading,
    selectedValue,
    handleSelectChange,
  } = useListData();

  console.log("selectedValue", selectedValue);

  const balanceMemoized = useMemo(() => {
    const balance = balanceData ? countBalance(balanceData) : 0;

    return `${balance} - ${selectedValue}`;
  }, [balanceData, selectedValue]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorInfo error={error.message} />;
  }

  return (
    <div className={styles.bodyContent}>
      <div className={styles.listHeader}>
        <h2>Balance: {balanceMemoized} $</h2>
        <Select
          options={options}
          onChange={handleSelectChange}
          value={selectedValue}
        />
      </div>
      <div className={styles.listWrapper}>
        <div className={styles.list}>
          {data?.map((item) => (
            <ListElement listElement={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
