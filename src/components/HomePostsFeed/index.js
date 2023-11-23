import {useEffect} from 'react'
import useFetch from '../../hooks/customFetchHook'
import LoadingView from '../LoadingView'
<<<<<<< HEAD
import PostItem from '../PostItem'
=======
>>>>>>> 959160a2a9178eb9bdac3730c5d13f3e969a0236
import convertJsonToJSObj from '../../helpers/convertJsonToJsObject'

export default function HomePostsFeed() {
  const url = 'https://apis.ccbp.in/insta-share/posts'
  const {fetchData, data, isPending, error} = useFetch(url)
<<<<<<< HEAD
  const postsData = data ? data.posts : null
=======
  // if (data) console.log(convertJsonToJSObj(data))
>>>>>>> 959160a2a9178eb9bdac3730c5d13f3e969a0236

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="home-posts-feed">
      {isPending && <LoadingView />}
      {error && <p>{error}</p>}
<<<<<<< HEAD
      {!isPending && (
        <>
          {postsData?.map(eachObj => (
            <PostItem postObject={eachObj} key={eachObj.postId} />
          ))}
        </>
      )}
=======
      {/* {!isPending && (
        <>
          {data?.products.length === 0 && <NoDataView />}
          {data?.products.length !== 0 && (
            <>
              <RenderdataTable data={data} />
            </>
          )}
        </>
      )} */}

      {data && <p>Total posts fetched: {data.posts.length}</p>}
>>>>>>> 959160a2a9178eb9bdac3730c5d13f3e969a0236
    </div>
  )
}
