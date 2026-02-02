/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import { Router, Route } from '@solidjs/router'
import App from './App'
import AccountPage from './pages/AccountPage'
import GamePage from './pages/GaePage'

const root = document.getElementById('root')

render(
  () => (
    <Router>
      <Route path="/" component={App} />
       <Route path="gamepage" component={GamePage} />
      <Route path="/account" component={() => <AccountPage user='Andrew' email='andrew2000@gmail.com' nickname='Andrewstar' balance={5000} />} />
    </Router>
  ),
  root!
)
