import Stories from '../Stories'
import HomePostsFeed from '../HomePostsFeed'
import './index.css'

export default function Home() {
  return (
    <div className="home-page-container content-container">
      <Stories />
      <HomePostsFeed />
    </div>
  )
}
