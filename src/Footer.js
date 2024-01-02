import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "20px 0",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <div style={{ margin: "0 auto", maxWidth: "600px" }}>
        <p style={{ fontSize: "0.8rem", color: "#888" }}>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/thissudhir"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007BFF", textDecoration: "none" }}
          >
            Abhishek
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
