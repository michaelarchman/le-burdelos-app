import { createSignal, Show } from "solid-js";
import { useNavigate } from "@solidjs/router";
import "../pages/VerifyPage.css";

const VerifyForm = () => {
    const [email, setEmail] = createSignal("");
    const [code, setCode] = createSignal("");
    const [generatedCode, setGeneratedCode] = createSignal("");
    const [step, setStep] = createSignal(1);
    const [message, setMessage] = createSignal("");
    const navigate = useNavigate();

    const handleSendCode = (e: Event) => {
        e.preventDefault();
        const newCode = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedCode(newCode);
        alert("Twój kod to: " + newCode);
        setStep(2);
        setMessage("Kod został wysłany!");
    };

    const handleVerifyCode = (e: Event) => {
        e.preventDefault();
        if (code() === generatedCode()) {
            setMessage("Zweryfikowano!");
            setTimeout(() => navigate("/"), 1000);
        } else {
            alert("Błędny kod!");
        }
    };

    return (
        <div class="verify-box">
            <Show when={message()}>
                <p class="verify-msg">{message()}</p>
            </Show>

            <Show when={step() === 1}>
                <form onSubmit={handleSendCode} class="verify-box">
                    <input 
                        type="email" 
                        placeholder="Twój email" 
                        class="verify-input"
                        value={email()} 
                        onInput={(e) => setEmail(e.currentTarget.value)} 
                        required 
                    />
                    <button type="submit" class="play_button" style={{ position: "static" }}>Wyślij kod</button>
                </form>
            </Show>

            <Show when={step() === 2}>
                <form onSubmit={handleVerifyCode} class="verify-box">
                    <input 
                        type="text" 
                        placeholder="Kod 6-cyfrowy" 
                        class="verify-input"
                        value={code()} 
                        onInput={(e) => setCode(e.currentTarget.value)} 
                        maxLength={6}
                        required 
                    />
                    <button type="submit" class="play_button" style={{ position: "static" }}>Weryfikuj</button>
                    <button type="button" onClick={() => setStep(1)} class="back-link">Zmień email</button>
                </form>
            </Show>
        </div>
    );
};

export default VerifyForm;
