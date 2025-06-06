import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">React + Bootstrap Project</h1>
          
          <div className="card">
            <div className="card-header">
              <h2>¡Bienvenido!</h2>
            </div>
            <div className="card-body">
              <p className="card-text">Este es tu nuevo proyecto de React con Bootstrap configurado.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary me-md-2" type="button">Botón Primario</button>
                <button className="btn btn-outline-secondary" type="button">Botón Secundario</button>
              </div>
            </div>
          </div>
          
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">React</h5>
                  <p className="card-text">Biblioteca de JavaScript para construir interfaces de usuario.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Bootstrap</h5>
                  <p className="card-text">Framework CSS para desarrollo responsivo y mobile-first.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">npm</h5>
                  <p className="card-text">Administrador de paquetes para Node.js y JavaScript.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
