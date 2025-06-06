import React from "react";

const Hero = () => {
  return (
    <div className="container-fluid hero-section d-flex align-items-center justify-content-center text-center my-5">
      <div className="container hero-content border p-5 bg-light rounded">
        <h1>Bienvenidos a Luz Y Naga</h1>
        <p>Planea la boda de tus sueños con nosotros.</p>
        <a href="/about" className="btn btn-primary">
          Contáctanos
        </a>
      </div>
    </div>
  );
}
export default Hero;