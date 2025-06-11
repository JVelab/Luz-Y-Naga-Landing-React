import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top custom-navbar">
      <div className="container-fluid">
        {/* Mobile: Logo left, toggler right */}
        <div className="d-flex d-lg-none w-100 align-items-center justify-content-between">
          <a className="navbar-brand mb-0 h3" href="/">
            Luz Y Naga
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="#navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Desktop: Centered nav */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav gap-3 align-items-center mx-auto d-none d-lg-flex">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">
                Conócenos
              </a>
            </li>
            <li className="nav-item">
              <h3
                className="mb-0 fw-bold"
                style={{
                  minWidth: "150px",
                  textAlign: "center",
                }}
              >
                Luz Y Naga
              </h3>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/servicios">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile: Collapsible menu */}
        <div className="d-lg-none">

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  Sobre Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/servicios">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;