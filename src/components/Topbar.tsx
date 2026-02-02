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
        <div>CTA</div>
      </nav>
    </div>
  )
}

export default Topbar
