function Navbar() {
  return (
    <div>
      {/* a11a36eda76d4ebf93e3f56a74f03844 */}
      <nav className="navbar navbar-expand-lg shadow py-2">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExample"
            aria-controls="navbarExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="#">
            <img src="/logo.png" width={50} />
          </a>
          <div className="collapse navbar-collapse" id="navbarExample">
            <ul className="navbar-nav me-auto mb-0">
              <li className="nav-item">
                <form action="">
                  <select className="form-select">
                    <option >Open this select menu</option>
                    <option value="{1}">One</option>
                    <option value="{2}">Two</option>
                    <option value="{3}">Three</option>
                  </select>
                </form>
              </li>
            </ul>
            <div className="d-flex align-items-center flex-column flex-lg-row">
              <form className="me-2 mb-2 mb-lg-0">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
