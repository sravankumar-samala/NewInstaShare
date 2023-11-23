import {useEffect, useRef} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {useInstaShareContext} from '../../context/instaShareContext'

export default function SearchField() {
  const inputRef = useRef()
  const {searchRef} = useInstaShareContext()
  const navigate = useNavigate()

  useEffect(() => {
    // This is to make access to header to make search input focus on clicking search link
    searchRef.current = inputRef.current
  }, [])

  const submitForm = async event => {
    event.preventDefault()
    searchRef.current.value = inputRef.current.value
    navigate('/searched-posts')
  }

  return (
    <form className="search-form-container" onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Search Caption"
        className="search-input"
        ref={inputRef}
      />
      <button
        aria-label="search"
        type="submit"
        className="search-btn"
        // eslint-disable-next-line react/no-unknown-property
        testid="searchIcon"
      >
        <FaSearch />
      </button>
    </form>
  )
}
