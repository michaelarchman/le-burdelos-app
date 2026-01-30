import { A } from "@solidjs/router"
import type { Component } from "solid-js"

const Topbar: Component = () => {
  return (
    <div id='Topbar'>
      <nav >
        <div>Logo</div>
        <div>Menu</div>
        <div>
          <A href="/account">Account</A>
        </div>
        <div>CTA</div>
      </nav>
    </div>
  )
}

export default Topbar
