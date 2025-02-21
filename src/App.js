import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min'
import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/gaming" component={Gaming} />
      <ProtectedRoute exact path="/trending" component={Trending} />
      <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
