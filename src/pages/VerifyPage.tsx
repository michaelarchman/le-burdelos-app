import type { Component } from "solid-js";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import VerifyForm from "../components/VerifyForm";

const VerifyPage: Component = () => {
    return (
        <div id="App">
            <Topbar />
            <Header />
            <Content 
                title="Weryfikacja" 
                description="Zabezpiecz swoje konto" 
                content={
                    <>
                        <h4>Wprowadź dane poniżej:</h4>
                        <VerifyForm />
                        <Footer email="leburdelos@gmail.com" telefon="+48 963 532 756" />
                    </>
                } 
            />
        </div>
    );
};

export default VerifyPage;
