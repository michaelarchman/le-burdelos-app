/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import './App.css'
import { Router, Route } from '@solidjs/router'
import App from './App'
import AccountPage from './pages/AccountPage'
import GamePage from './pages/GamePage'
import VerifyPage from './pages/VerifyPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

const root = document.getElementById('root')

render(
  () => (
    <Router>
      <Route path="/" component={App} />
      <Route path="/gamepage" component={GamePage} />
      <Route path="/account" component={() => <AccountPage user='Andrew' email='andrew2000@gmail.com' nickname='Andrewstar' balance={5000} />} />
      <Route path="/verify" component={VerifyPage} />
      <Route path="Register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
    </Router>
  ),
  root!
) 
