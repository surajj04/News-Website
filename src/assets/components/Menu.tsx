import { useState } from "react";
import News from "./News";

function Menu() {
  const [catogry, setCatogry] = useState("");

  return (
    <>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler my-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <a className="navbar-brand mt-2 mt-lg-0" href="/">
                <img src="logo2.png" height={40} alt="MDB Logo" loading="lazy" />
                <p className="d-inline mx-3 my-4">The Bharat Express</p>
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => setCatogry('business')}>
                    business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => setCatogry('entertainment')}>
                    entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => setCatogry('health')}>
                    health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => setCatogry('science')}>
                    science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => setCatogry('sports')}>
                    sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => setCatogry('technology')}>
                    technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="">
        <News category={catogry} />
      </div>
    </>
  );
}

export default Menu;
