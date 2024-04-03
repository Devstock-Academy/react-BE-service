export const countBalance = (array) =>
  array.reduce(
    (accu, item) =>
      item.type === 'income' ? accu + item.amount : accu - item.amount,
    0
  )
