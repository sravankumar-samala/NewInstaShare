import {useEffect} from 'react'
import useFetch from '../../hooks/customFetchHook'
import LoadingView from '../LoadingView'
import convertJsonToJSObj from '../../helpers/convertJsonToJsObject'

export default function HomePostsFeed() {
  const url = 'https://apis.ccbp.in/insta-share/posts'
  const {fetchData, data, isPending, error} = useFetch(url)
  // if (data) console.log(convertJsonToJSObj(data))

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="home-posts-feed">
      {isPending && <LoadingView />}
      {error && <p>{error}</p>}
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
    </div>
  )
}
