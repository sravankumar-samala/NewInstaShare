import {useEffect} from 'react'
import DisplaySlider from './DisplaySlider'
import useFetch from '../../hooks/customFetchHook'
import LoadingView from '../LoadingView'
import './index.css'

export default function Stories() {
  const url = 'https://apis.ccbp.in/insta-share/stories'
  const {fetchData, data, isPending} = useFetch(url)
  const storiesData = data ? data.usersStories : null

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="slider-container">
      {isPending && <LoadingView height={30} width={30} />}
      {data && <DisplaySlider storiesData={storiesData} />}
    </div>
  )
}
