import {useEffect} from 'react'
import useFetch from '../../hooks/customFetchHook'
import LoadingView from '../LoadingView'
import PostItem from '../PostItem'
import convertJsonToJSObj from '../../helpers/convertJsonToJsObject'

export default function HomePostsFeed() {
  const url = 'https://apis.ccbp.in/insta-share/posts'
  const {fetchData, data, isPending, error} = useFetch(url)
  const postsData = data ? data.posts : null

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="home-posts-feed">
      {isPending && <LoadingView />}
      {error && <p>{error}</p>}
      {!isPending && (
        <>
          {postsData?.map(eachObj => (
            <PostItem postObject={eachObj} key={eachObj.postId} />
          ))}
        </>
      )}
    </div>
  )
}
