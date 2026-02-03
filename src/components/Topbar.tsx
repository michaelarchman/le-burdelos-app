import { A } from "@solidjs/router"
import type { Component } from "solid-js"

const Topbar: Component = () => {
  return (
    <div id='login-box'>
      <nav >
        <div>Logo</div>
        <div>Menu</div>
        <A href="/account">Account</A>
        <A href="gamepage">Gry</A>
        <A href="login">Zaloguj</A>
        <A href="register">Zarejestruj się</A>
      </nav>
    </div>
  )
}

export default Topbar
