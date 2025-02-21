import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateUser from "./pages/CreateUserPage";
import UserList from "./pages/UserListPage";

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <nav>
          <Link to="/" className="btn btn-primary me-2">
            Create User
          </Link>
          <Link to="/users" className="btn btn-secondary">
            User List
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<CreateUser />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
