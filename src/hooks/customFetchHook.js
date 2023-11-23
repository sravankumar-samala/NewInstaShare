import {useState, useCallback} from 'react'
import Cookies from 'js-cookie'
import convertJsonToJSObj from '../helpers/convertJsonToJsObject'

export default function useFetch(fetchUrl, method = 'GET') {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = useCallback(
    async (requestData = null) => {
      setIsPending(true)
      const jwtToken = Cookies.get('jwt_token')

      const headers = {
        Authorization: `Bearer ${jwtToken}`,
      }

      const options = {
        method,
      }

      if (method === 'GET') options.headers = headers

      if (requestData !== null) options.body = JSON.stringify(requestData)

      try {
        const response = await fetch(fetchUrl, options)
        const fetchedData = await response.json()
        if (!response.ok) throw new Error(fetchedData.error_msg)

        const responseToken = fetchedData.jwt_token
        if (responseToken !== undefined) {
          Cookies.set('jwt_token', responseToken, {expires: 30})
        }

        const updatedData = convertJsonToJSObj(fetchedData)
        setData(updatedData)
      } catch (err) {
        setError(err.message)
        console.log(err.message)
      } finally {
        setIsPending(false)
      }
    },
    [fetchUrl, method],
  )

  return {data, isPending, error, fetchData}
}
