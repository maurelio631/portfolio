import React from "react";

export default function Navbar() {
    return (
        <nav style={{ display: "flex", justifyContent: "space-around", backgroundColor: "black", color: "white", height: "4rem", alignItems: "center" }}>
            <div>
                <h1>Marco</h1>
            </div>
            <ul style={{ display: "flex" }}>
                <li>Sobre mim</li>
                <li>Educação</li>
                <li>Experiência</li>
                <li>Habilidades</li>
            </ul>
            <div style={{ display: "flex" }}>
                <div>Linkedin</div>
                <div>GitHub</div>
                <div>E-mail</div>
            </div>
        </nav>
    )
}