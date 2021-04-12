import React from "react";

function Home() {
  return (
    <>
      
      <div className="background-image">

      

      <div class="card bg-dark text-white">
        <div className="background-image"></div>
        <div class="card-img-overlay">
          <nav class="navbar navbar-expand-lg navbar-dark bg-gradient">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Tejas Hatle
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>

            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li class="nav-item subscribe-me">
                  <a class="nav-link" href="#">
                    Subscribe Me
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <h1 class="title-header">Hey there, Tejas Here</h1>
          <h5 class="tagline ml-auto mr-auto">Explore modern technologies with me</h5>

          <button type="button" class="explore-blogs mt-3">EXPLORE BLOGS</button>
        </div>
      </div>

      </div>
    </>
  );
}

export default Home;
