export const countBalance = (array) => {
  for (let i = 0; i < 5000; i++) {
    console.log("aaa");
  }
  console.log("countBalance");
  return array.reduce(
    (accu, item) =>
      item.type === "income" ? accu + item.amount : accu - item.amount,
    0
  );
};
