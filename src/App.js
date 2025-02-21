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
import './App.css'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/gaming" component={Gaming} />
      <Route exact path="/trending" component={Trending} />
      <Route exact path="/saved-videos" component={SavedVideos} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
