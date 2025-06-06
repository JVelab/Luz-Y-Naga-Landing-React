import React from "react";

const Services = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/images/services.png" className="card-img-top services-img" alt="Service 1" />
            <div className="card-body">
              <h5 className="card-title">Wedding Planning</h5>
              <p className="card-text">Comprehensive planning services to make your wedding day perfect.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/images/services.png" className="card-img-top services-img" alt="Service 2" />
            <div className="card-body">
              <h5 className="card-title">Venue Selection</h5>
              <p className="card-text">Assistance in finding the perfect venue for your special day.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/images/services.png" className="card-img-top services-img" alt="Service 3" />
            <div className="card-body">
              <h5 className="card-title">Catering Services</h5>
              <p className="card-text">Delicious catering options to suit every taste and budget.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/images/services.png" className="card-img-top services-img" alt="Service 4" />
            <div className="card-body">
              <h5 className="card-title">Photography</h5>
              <p className="card-text">Capture your special moments with our professional photography services.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/images/services.png" className="card-img-top services-img" alt="Service 5" />
            <div className="card-body">
              <h5 className="card-title">Floral Arrangements</h5>
              <p className="card-text">Beautiful floral designs to enhance the beauty of your wedding.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/images/services.png" className="card-img-top services-img" alt="Service 6" />
            <div className="card-body">
              <h5 className="card-title">Entertainment</h5>
              <p className="card-text">Live music and entertainment options to keep your guests entertained.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a href="/contact" className="btn btn-primary">
          Contact Us for More Information
        </a>
      </div>
    </div>
  );
}
export default Services;