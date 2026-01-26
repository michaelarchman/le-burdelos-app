import type { Component } from "solid-js";

const Header: Component = () => {
    return (
        <>
            <header class="main-header">
                <h1> Polecany <br/> slot </h1>
                <h3> Le Burdelos</h3>
                <p>
                    Najwyższy możliwy <br/> jackpot posród <br/> wszystkich slotów
                </p>
                <button class="play_button">Zagraj teraz</button>
            </header>
        </>
    )
}

export default Header