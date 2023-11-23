import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'

export default function ProtectedRoute({Component}) {
  const token = Cookies.get('jwt_token')
  if (token === undefined) return <Navigate to="/login" />

  return <Component />
}
