import type { Component } from "solid-js";

type FooterProps={
    email: string;
    telefon: string;
    telefon2: string;
}

const Footer: Component<FooterProps> = (props: FooterProps ) => {
    return (
        <div class="contact-box">
            <div class="contact-left">
                <h2>Le Burdelos</h2>
            </div>

            <div class="contact-right">
                <p>{props.telefon}</p>
                <p>{props.email}</p>
                <p>{props.telefon2}</p>
            </div>
        </div>
    )
}

export default Footer