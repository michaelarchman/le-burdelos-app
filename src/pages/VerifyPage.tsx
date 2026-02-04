import type { Component } from "solid-js";
import { createSignal, Show } from "solid-js";
import { A } from "@solidjs/router";
import "./VerifyPage.css";

const VerifyPage: Component = () => {
    const [email, setEmail] = createSignal("");
    const [code, setCode] = createSignal("");
    const [generatedCode, setGeneratedCode] = createSignal("");
    const [step, setStep] = createSignal(1); // 1: Email, 2: Code
    const [message, setMessage] = createSignal("");

    const handleSendCode = (e: Event) => {
        e.preventDefault();
        if (email()) {
            // Generujemy losowy kod 6-cyfrowy
            const newCode = Math.floor(100000 + Math.random() * 900000).toString();
            setGeneratedCode(newCode);
            
            console.log("KOD WERYFIKACYJNY (tymczasowo w konsoli):", newCode);
            alert("Twój kod to: " + newCode + " (W rzeczywistej aplikacji ten kod zostałby wysłany na email)");
            
            setStep(2);
            setMessage("Kod został wysłany na Twój email!");
        }
    };

    const handleVerifyCode = (e: Event) => {
        e.preventDefault();
        if (code() === generatedCode()) {
            setMessage("Pomyślnie zweryfikowano! Logowanie...");
            setTimeout(() => {
                window.location.href = "/";
            }, 1500);
        } else {
            setMessage("Nieprawidłowy kod. Spróbuj ponownie.");
        }
    };

    return (
        <div class="verify-container">
            <A href="/" class="back-chevron">‹</A>
            <h2>Verify Account</h2>
            <Show when={message()}>
                <p style={{ color: "#ffd700", "margin-bottom": "1rem" }}>{message()}</p>
            </Show>
            
            <Show when={step() === 1}>
                <form class="verify-form" onSubmit={handleSendCode}>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        class="verify-input"
                        value={email()}
                        onInput={(e) => setEmail(e.currentTarget.value)}
                        required
                    />
                    <button type="submit" class="verify-button">Send Code</button>
                </form>
            </Show>

            <Show when={step() === 2}>
                <form class="verify-form" onSubmit={handleVerifyCode}>
                    <input 
                        type="text" 
                        placeholder="Enter 6-digit code" 
                        class="verify-input"
                        value={code()}
                        onInput={(e) => setCode(e.currentTarget.value)}
                        maxLength={6}
                        required
                    />
                    <button type="submit" class="verify-button">Verify Code</button>
                    <button 
                        type="button" 
                        class="verify-button" 
                        style={{ "background-color": "transparent", color: "#ffd700", border: "1px solid #ffd700" }}
                        onClick={() => setStep(1)}
                    >
                        Back
                    </button>
                </form>
            </Show>
        </div>
    );
};

export default VerifyPage;
