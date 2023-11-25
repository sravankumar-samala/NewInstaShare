import {useRef} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GiHamburgerMenu} from 'react-icons/gi'
import {useInstaShareContext} from '../../context/instaShareContext'
import SearchField from '../SearchInputField'
import './index.css'

export default function Header() {
  const {searchRef} = useInstaShareContext()
  const navRef = useRef()
  const history = useHistory()
  const location = useLocation()
  const currLocation = location.pathname.split('/')[1]

  const toggleNavbar = e => {
    navRef.current.classList.toggle('active')
    if (e.target.textContent === 'Search') {
      searchRef.current.focus()
    }
  }

  const logout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="layout-container header-wrapper">
      <div className="header-container">
        <Link to="/" className="logo">
          <img
            src="https://res-console.cloudinary.com/dug9vpon2/media_explorer_thumbnails/11a226339bec37f7a92edd079101d273/card"
            alt="website logo"
          />
          <span className="logo-text">Insta Share</span>
        </Link>
        <nav className="nav-container" ref={navRef}>
          <SearchField />
          <Link to="/" className={currLocation === '' ? 'active-link' : ''}>
            Home
          </Link>
          <Link
            to={location.pathname}
            onClick={toggleNavbar}
            className="search-link"
          >
            Search
          </Link>
          <Link
            to="/my-profile"
            className={currLocation === 'my-profile' ? 'active-link' : ''}
          >
            Profile
          </Link>
          <button type="button" onClick={logout} className="logout-btn">
            Logout
          </button>
        </nav>
        <button
          type="button"
          className="hamburger-btn"
          onClick={toggleNavbar}
          aria-label="menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* search container on small screens  */}
      <div className="search-container-small">
        <SearchField />
      </div>
    </div>
  )
}
