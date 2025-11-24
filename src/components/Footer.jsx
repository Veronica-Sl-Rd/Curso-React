import React from "react";

const Footer = () => {
    return (
        <footer
            style={{
                background: "#000",
                padding: "1.5rem 0",
                marginTop: "2rem",
                textAlign: "center",
            }}>
            <div style={{ display: "flex", gap: "2rem", justifyContent: "center"}}>
                <a
                    href="https://linkedin.com/in/verónica-rodriguez-psi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff", fontSize: "1.8rem" }}>
                    <i className="bi bi-linkedin"></i>
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff", fontSize: "1.8rem" }}>
                    <i className="bi bi-instagram"></i>
                </a>
            </div>
            <p style={{ color: "#aaa", fontSize: "0.9rem", marginTop: "1rem" }}>
                © 2025 Versum. Todos los derechos reservados.
            </p>
        </footer>
    );
};

export default Footer;
