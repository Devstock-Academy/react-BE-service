import { useReducer } from "react";
import useCardData from "../../hooks/useCardData";
import { ListElement, Button, Form } from "../../components";
import styles from "./FeatureActivities.module.css";

const activityReducer = (state, action) => {
  console.log("action", action);

  switch (action.type) {
    case "ADD":
      return {
        ...state,
        activities: [
          ...state.activities,
          {
            ...action.body,
            id: Math.random(),
          },
        ],
      };
    case "DELETE":
      return {
        ...state,
        activities: state.activities.filter(
          (activity) => activity.id !== action.id
        ),
      };
    case "SEND":
      // eslint-disable-next-line no-case-declarations
      const { id: elementId, ...rest } = state.activities.find(
        ({ id: cardId }) => cardId === action.id
      );

      action.postData(rest);
      return {
        ...state,
        activities: state.activities.filter(
          (activity) => activity.id !== elementId
        ),
      };
    case "TOGGLE_FORM":
      return { ...state, isFormShown: !state.isFormShown };
    default:
      return state;
  }
};

const FeatureActivities = () => {
  const [state, dispatch] = useReducer(activityReducer, {
    isFormShown: false,
    activities: [
      {
        description: "Zapłacić rachunki",
        amount: 100,
        type: "expense",
        id: 1,
        date: "2024-04-01",
      },
      {
        description: "Dentysta",
        amount: 400,
        type: "expense",
        id: 2,
        date: "2024-04-01",
      },
    ],
  });

  const { postData } = useCardData();

  function addItem(body) {
    dispatch({ type: "ADD", body });
  }

  function deleteItem(id) {
    dispatch({ type: "DELETE", id });
  }

  function finishItem(id) {
    dispatch({ type: "SEND", id, postData });
  }

  return (
    <div className={styles.container}>
      <div className={styles.actionBar}>
        <h2>Planowane aktywności</h2>
        <div>
          <Button onClick={() => dispatch({ type: "TOGGLE_FORM" })}>
            {state.isFormShown ? "Ukryj formularz" : "Pokaż formularz"}
          </Button>
        </div>
      </div>
      {state.isFormShown && <Form handleBody={addItem} />}
      <h3>Lista</h3>
      <div className={styles.list}>
        {state.activities.map((item) => (
          <ListElement
            key={item.id}
            listElement={item}
            handleCardDelete={deleteItem}
            handleCardApproval={finishItem}
          />
        ))}
      </div>
    </div>
  );
};
export default FeatureActivities;
