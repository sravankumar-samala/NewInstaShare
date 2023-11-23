import {useEffect} from 'react'
import {useInstaShareContext} from '../../context/instaShareContext'
import useFetch from '../../hooks/customFetchHook'

export default function SearchedPosts() {
  const {searchRef} = useInstaShareContext()
  const searchValue = searchRef.current ? searchRef.current.value : ''
  const baseUrl = `https://apis.ccbp.in/insta-share/posts?search=${searchValue}`
  const {fetchData, data, isPending, error} = useFetch(baseUrl)
  const searchResults = data ? data.total : null
  if (data) console.log(data)

  useEffect(() => {
    console.log(searchValue)
    fetchData()
  }, [fetchData, searchValue])

  return (
    <div className="content-container">
      <h1>This is Searched Posts page</h1>
      {isPending && <p>Loading...</p>}
      {searchResults && <p>{searchResults}</p>}
    </div>
  )
}
