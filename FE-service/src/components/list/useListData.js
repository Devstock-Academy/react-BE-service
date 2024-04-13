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
      .then((response) => {
        if (isCancelled) {
          return
        }
        setIsLoading(false)
        setData(response)
        !balanceData && setBalanceData(response)
      })
      .catch((e) => {
        setIsLoading(false)
        setError(e)
      })
    return () => {
      isCancelled = true
    }
  }, [selectedValue, balanceData])

  return {
    data,
    error,
    isLoading,
    selectedValue,
    handleSelectChange,
    balanceData,
  }
}

export default useListData
