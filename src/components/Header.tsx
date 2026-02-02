import type { Component } from "solid-js";
import { A } from "@solidjs/router";

const Header: Component = () => {
    return (
        <>
            <header class="main-header">
                <h1> Polecany <br/> slot </h1>
                <h3> Le Burdelos</h3>
                <p>
                    Najwyższy możliwy <br/> jackpot posród <br/> wszystkich slotów
                </p>
                <A href="/casino" class="play_button">Zagraj teraz</A>
            </header>
        </>
    )
}

export default Header