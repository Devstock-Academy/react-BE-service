import { useState, useContext, useRef, forwardRef } from "react";
import { createPortal } from "react-dom";
import { LoginContext } from "../../context/LoginContext";
import { formatDate } from "../../utils/date";
import Modal from "../modal/Modal";
import Button from "../button/Button";
import useBudgetForm from "./useBudgetForm";
import styles from "./BudgetForm.module.css";

const Input = forwardRef(function Input(props, ref) {
  return <input {...props} ref={ref} />;
});

const BudgetForm = () => {
  const [selectedValue, setSelectedValue] = useState("income");
  // const counterRef = useRef(0);
  // const [counter, setCounter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn } = useContext(LoginContext);
  const { postData } = useBudgetForm();
  const today = new Date();
  const date = formatDate(today);
  const descRef = useRef(null);
  const amountRef = useRef(null);
  const submitRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      date,
      type: selectedValue,
      description: descRef.current.value,
      amount: amountRef.current.value,
    };

    if (!isLoggedIn) {
      setIsModalOpen(true);
      return;
    }

    postData(body);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const modal = createPortal(
    <Modal variant="secondary" onClose={() => setIsModalOpen(false)}>
      Dodawanie tylko dla zalogowanych użytkowników
    </Modal>,
    document.body
  );

  // const incrementCounter = () => {
  //   // setCounter((prev) => prev + 1);
  //   counterRef.current += 1;
  //   console.log("counter", counter);
  //   console.log("currentRef", counterRef);
  // };

  const handleKeyPress = (event, ref) => {
    console.log(event.key);
    if (event.key === "Enter") {
      ref.current.focus();
    }
  };

  return (
    <div className={styles.formContainer}>
      {/* <div>
        <span>Counter State: {counter}</span>
        <br />
        <span>Counter Ref: {counterRef.current}</span>
        <br />
        <Button onClick={incrementCounter} type="submit">
          Increment counter
        </Button>
        <Button onClick={() => setCounter(counterRef.current)} type="submit">
          Sync UI
        </Button>
      </div> */}

      <h2>Dodaj pozycję</h2>
      <form onSubmit={handleSubmit} className={styles.budgetForm} noValidate>
        <Input
          type="text"
          placeholder="Opis"
          required
          ref={descRef}
          onKeyPress={(e) => handleKeyPress(e, amountRef)}
        />
        <Input
          type="number"
          placeholder="Wartość"
          required
          ref={amountRef}
          onKeyPress={(e) => handleKeyPress(e, submitRef)}
        />
        <div>
          <label>
            <input
              type="radio"
              value="income"
              checked={selectedValue === "income"}
              onChange={handleChange}
            />
            Przychód
          </label>
          <label>
            <input
              type="radio"
              value="expense"
              checked={selectedValue === "expense"}
              onChange={handleChange}
            />
            Koszt
          </label>
        </div>
        <Button type="submit" ref={submitRef}>
          Dodaj
        </Button>
        {isModalOpen && modal}
      </form>
    </div>
  );
};

export default BudgetForm;
