import {Route, Routes, useLocation} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import UserProfile from './components/UserProfile'
import MyProfile from './components/MyProfile'
import SearchedPosts from './components/SearchedPosts'
import NotFound from './components/NotFound'
import './App.css'

const headerRenderRoutes = ['/', '/user/:id', '/my-profile', '/searched-posts']

const App = () => {
  const location = useLocation()
  const {pathname} = location
  return (
    <div className="app-container">
      {/* render header only on specific routes  */}
      {headerRenderRoutes.includes(pathname) && <Header />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index path="/" element={<ProtectedRoute Component={Home} />} />
        <Route
          path="/user/:id"
          element={<ProtectedRoute Component={UserProfile} />}
        />
        <Route
          path="/my-profile"
          element={<ProtectedRoute Component={MyProfile} />}
        />
        <Route
          path="/searched-posts"
          element={<ProtectedRoute Component={SearchedPosts} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
