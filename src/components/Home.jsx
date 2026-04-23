import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">

      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Smart Notes Hub</h1>
        <p className="text-muted">
          Capture your ideas, organize your thoughts, and stay productive
        </p>

        <Link to="/notes">
          <button className="btn btn-primary mt-3">
            Go to Notes
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="row text-center">

        <div className="col-md-4 mb-4">
          <h5>
            <i className="fa-solid fa-note-sticky me-2"></i>
            Create Notes
          </h5>
          <p className="text-muted">
            Quickly add your daily ideas and tasks
          </p>
        </div>

        <div className="col-md-4 mb-4">
          <h5>
            <i className="fa-solid fa-pen me-2"></i>
            Edit Notes
          </h5>
          <p className="text-muted">
            Modify your notes anytime easily
          </p>
        </div>

        <div className="col-md-4 mb-4">
          <h5>
            <i className="fa-solid fa-trash me-2"></i>
            Delete Notes
          </h5>
          <p className="text-muted">
            Remove unwanted notes instantly
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;