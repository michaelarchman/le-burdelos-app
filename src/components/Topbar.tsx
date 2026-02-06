import { A } from "@solidjs/router"
import type { Component } from "solid-js"

const Topbar: Component = () => {
  return (
    <div id='Topbar'>
      <nav >
        <div>Logo</div>
        <div>Menu</div>
        <A href="/account">Account</A>
        <A href="gamepage">Gry</A>
        <A href="register">Zarejestruj się</A>
        <A href="/gamepage">Gry</A>
        <div class="topbar-right">
          <A href="/verify" class="verify-square-btn">Zweryfikuj się</A>
          <A href="/login" class="verify-square-btn">Zaloguj sie</A>
        </div>
      </nav>
    </div>
  )
}

export default Topbar 
