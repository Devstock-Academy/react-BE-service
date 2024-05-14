import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../list/Loading";

const ListElementsDetails = () => {
  const [cardData, setCardData] = useState(null);
  const { id } = useParams();

  console.log("id", id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/transactions/${id}`);
      const data = await response.json();
      setCardData(data);
    };

    fetchData();
  }, [id]);

  if (!cardData) return <Loading />;

  return (
    <div>
      <h2>{cardData.description}</h2>
      <h3>Wartość {cardData.amount}$</h3>
      <h4>Typ: {cardData.type}</h4>
      <div>{cardData.date}</div>
    </div>
  );
};

export default ListElementsDetails;
