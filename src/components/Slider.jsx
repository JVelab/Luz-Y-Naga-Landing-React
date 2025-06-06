import React from "react";

const Slider = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://elitebodas.com/wp-content/uploads/2020/03/que-es-un-wedding-planner-1200x801.jpg" alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://static.grupojoly.com/clip/96db6f55-0b0e-4ec7-b3cd-3de5f9a324d5_source-aspect-ratio_1600w_0.jpg" alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://atrezofloristas.com/wp-content/uploads/2019/09/wedding-planner-en-granada-boda-en-la-playa.jpg" alt="Third slide"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default Slider;