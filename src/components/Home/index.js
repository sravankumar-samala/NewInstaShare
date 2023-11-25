import Header from '../Header'
import Stories from '../Stories'
import HomePostsFeed from '../HomePostsFeed'
import './index.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-page-container content-container">
        <Stories />
        <HomePostsFeed />
      </div>
    </>
  )
}
