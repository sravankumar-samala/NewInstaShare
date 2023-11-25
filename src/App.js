import {
  Route,
  Switch,
  //   useHistory,
  Redirect,
  useLocation,
} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import UserProfile from './components/UserProfile'
import MyProfile from './components/MyProfile'
import SearchedPosts from './components/SearchedPosts'
import NotFound from './components/NotFound'
import './App.css'

const headerRenderRoutes = ['/user/:id', '/my-profile', '/searched-posts']

const App = () => {
  const location = useLocation()
  const {pathname} = location

  return (
    <div className="app-container">
      {/* render header only on specific routes  */}
      {headerRenderRoutes.includes(pathname) && <Header />}

      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/user/:id" component={UserProfile} />

        <ProtectedRoute exact path="/my-profile" component={MyProfile} />

        <ProtectedRoute
          exact
          path="/searched-posts"
          component={SearchedPosts}
        />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  )
}

export default App
