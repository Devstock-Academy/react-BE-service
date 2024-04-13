const url = 'http://localhost:3000/transactions'

const useBudgetForm = () => {
  const postData = async (data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const jsonResponse = await response.json()
      console.log('Success:', jsonResponse)
      return jsonResponse
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return { postData }
}

export default useBudgetForm
