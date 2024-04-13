export const countBalance = (array) => {
  const balance = array?.reduce(
    (accu, item) =>
      item.type === 'income'
        ? accu + Number(item.amount)
        : accu - Number(item.amount),
    0
  )
  const revenue = array?.reduce((accu, item) => {
    if (item.type === 'income') return accu + Number(item.amount)
    return accu
  }, 0)

  const spendings = array?.reduce((accu, item) => {
    if (item.type === 'expense') return accu + Number(item.amount)
    return accu
  }, 0)

  return {
    balance,
    revenue,
    spendings,
  }
}
