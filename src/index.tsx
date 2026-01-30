/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import { Route, Router } from '@solidjs/router'
import App from './App'
import GamePage from '../pages/GamePage.tsx'

const root = document.getElementById('root')

render(
    () => (
        <Router>
            <Route path="/" component={App}/>
            <Route path="gamepage" component={GamePage} />
        </Router>
    ), root!)
