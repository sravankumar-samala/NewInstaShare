import {useRef, useState} from 'react'
import {useHistory, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
// import useFetch from '../../hooks/customFetchHook'
import './index.css'

export default function Login() {
  const [error, setError] = useState(null)
  const nameRef = useRef('')
  const passwordRef = useRef('')
  const history = useHistory()

  //   const {fetchData, data, error} = useFetch(baseUrl, 'POST')

  const token = Cookies.get('jwt_token')
  if (token !== undefined) return <Redirect to="/" />

  //   if (data) {
  //     const {jwtToken} = data
  //     Cookies.set('jwt_token', jwtToken, {expires: 30})
  //     history.replace('/')
  //   }

  // Navigates to home route if user already logged in or just logged in.
  //   useEffect(() => {
  //     const jwtToken = Cookies.get('jwt_token')
  //     if (jwtToken !== undefined || data?.jwt_token) {
  //       history.replace('/')
  //     }
  //   }, [data, history])

  const handleFormSubmit = async event => {
    event.preventDefault()

    const userData = {
      username: nameRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
    }
    const baseUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }

    try {
      const response = await fetch(baseUrl, options)
      const data = await response.json()
      if (!response.ok) throw new Error(data.error_msg)

      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {
        expires: 30,
      })
      history.replace('/')
    } catch (err) {
      setError(err.message)
    }

    // await fetchData(userData)
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
