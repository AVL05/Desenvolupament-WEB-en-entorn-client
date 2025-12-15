export default function Header({carrito}) {
  const carritoVacio = useMemo (() => carrito.lenght === 0, [carrito]);
  const carritoTotal = () =>
    carrito.reduce(
      (total, element) => total + (element.cantidad * element.price),
      0
    );

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="#">
              <img
                className="img-fluid"
                src="/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="/img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                {carritoVacio ? (
                  <p className="text-center">El carrito esta vacio</p>
                ) : (
                  <>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {carrito.map((element) => (
                          <tr key={element.id}>
                            <td>
                              <img
                                className="img-fluid"
                                src={`/img/${element.image}.jpg`}
                                alt="imagen guitarra"
                              />
                            </td>
                            <td>{element.name}</td>
                            <td className="fw-bold">{element.price}€</td>
                            <td className="d-flex align-items-center gap-2">
                              <button type="button" className="btn btn-dark">
                                -
                              </button>
                              {element.cantidad}
                              <button type="button" className="btn btn-dark">
                                +
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-danger" type="button">
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <p className="text-end">
                      Total pagar:{" "}
                      <span className="fw-bold">
                        {carrito.reduce(
                          (total, guitarra) => total + guitarra.price,
                          0
                        )}
                        €
                      </span>
                    </p>
                    <button
                      className="btn btn-dark w-100 mt-3 p-2"
                      onClick={() => setCarrito([])}
                    >
                      Vaciar Carrito
                    </button>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
