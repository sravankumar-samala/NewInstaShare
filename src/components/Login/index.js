import {useRef, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import useFetch from '../../hooks/customFetchHook'
import './index.css'

export default function Login() {
  const nameRef = useRef('')
  const passwordRef = useRef('')
  const navigate = useNavigate()

  const baseUrl = 'https://apis.ccbp.in/login'
  const {fetchData, data, error} = useFetch(baseUrl, 'POST')

  // Navigates to home route if user already logged in or just logged in.
  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined || data?.jwt_token) navigate('/')
  }, [data, navigate])

  const handleFormSubmit = event => {
    event.preventDefault()

    const userData = {
      username: nameRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
    }

    fetchData(userData)
  }

  return (
    <div className="login-page-container content-container">
      <div className="login-image-container">
        <img
          src="https://res.cloudinary.com/dug9vpon2/image/upload/v1700468751/a2u0kvyqnttgndn7uzdu.png"
          alt="website login"
        />
      </div>
      <div className="login-form-container">
        <div className="login-form-content-wrapper">
          <div className="login-logo-container">
            <img
              src="https://res-console.cloudinary.com/dug9vpon2/media_explorer_thumbnails/11a226339bec37f7a92edd079101d273/card"
              alt="website logo"
            />
            <h3>Insta Share</h3>
          </div>
          <form onSubmit={handleFormSubmit} className="form">
            <label htmlFor="user-name">username</label>
            <input
              type="text"
              ref={nameRef}
              id="user-name"
              placeholder="Enter your user name"
              required
            />
            <label htmlFor="password">password</label>
            <input
              type="password"
              ref={passwordRef}
              id="password"
              placeholder="Enter your password"
              required
            />
            <p className="error-text">{error}</p>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
