import { useState, useEffect } from 'react'

const url = 'http://localhost:3000/transactions'

const useListData = () => {
  const [selectedValue, setSelectedValue] = useState('')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [balanceData, setBalanceData] = useState(null)

  const handleSelectChange = (newValue) => {
    setSelectedValue(newValue)
  }

  useEffect(() => {
    let isCancelled = false
    setIsLoading(true)
    fetch(`${url}/${selectedValue && `?type=${selectedValue}`}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }

        throw new Error('Coś poszło nie tak...')
      })
      .then((responseJson) => {
        if (isCancelled) {
          return
        }
        setIsLoading(false)
        
        if (!data) {
          setBalanceData(responseJson)
        }
        setData(responseJson)
      })
      .catch((e) => {
        setIsLoading(false)
        setError(e)
      })
    return () => {
      isCancelled = true
    }
  }, [selectedValue])

  return { data, balanceData, error, isLoading, selectedValue, handleSelectChange }
}

export default useListData
