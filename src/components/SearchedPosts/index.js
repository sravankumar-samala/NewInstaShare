import {useEffect} from 'react'
import {useInstaShareContext} from '../../context/instaShareContext'
import useFetch from '../../hooks/customFetchHook'
import PostItem from '../PostItem'
import LoadingView from '../LoadingView'

export default function SearchedPosts() {
  const {searchRef} = useInstaShareContext()
  const searchValue = searchRef.current ? searchRef.current.value : ''
  const baseUrl = `https://apis.ccbp.in/insta-share/posts?search=${searchValue}`
  const {fetchData, data, isPending, error} = useFetch(baseUrl)
  const searchResults = data ? data.posts : null

  useEffect(() => {
    console.log(searchValue)
    fetchData()
  }, [fetchData, searchValue])

  return (
    <div className="content-container searched-posts-wrapper">
      <h2>Search Results</h2>
      <div className="searched-posts-container">
        {isPending && <LoadingView />}
        {!isPending &&
          searchResults &&
          searchResults?.map(eachObj => (
            <PostItem postObject={eachObj} key={eachObj.postId} />
          ))}
      </div>
    </div>
  )
}

