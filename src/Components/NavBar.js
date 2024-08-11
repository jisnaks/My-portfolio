import React from 'react';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg px-4 px-lg-5" style={{ height: "80px", background: 'white' }}>
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <a className="navbar-brand" href="#">Jisna</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link me-4" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="#About">About</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="#project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project">Contact</a>
                        </li>
                    </ul>
                </div>
               
            </div>
        </nav>
    );
}

export default NavBar;

