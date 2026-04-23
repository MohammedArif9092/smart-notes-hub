import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <i className="fa-solid fa-note-sticky me-2"></i>
                    Smart Notes Hub
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="fa-solid fa-house me-1"></i> Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/notes">
                                <i className="fa-solid fa-book me-1"></i> Notes
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;