function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Antonella D'Atri</span>
            {/* <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="..." /></span> */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">Sobre mi</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experiencia</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Educacion</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Conocimientos</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#Works">Trabajos</a></li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;