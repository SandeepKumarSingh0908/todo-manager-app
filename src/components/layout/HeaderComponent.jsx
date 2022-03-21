import { Link } from "react-router-dom";
import AuthenticationService from "../../services/AuthenticationService";
const HeaderComponent = () => {
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
  console.log(isUserLoggedIn);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div>
          <Link to="/" className="navbar-brand">
            TodoApp
          </Link>
        </div>
        <ul className="navbar-nav">
          <li>
            {isUserLoggedIn && (
              <Link className="nav-link" to="/welcome/SanSingh">
                Home
              </Link>
            )}
          </li>
          <li>
            {isUserLoggedIn && (
              <Link className="nav-link" to="/todos">
                Todos
              </Link>
            )}
          </li>
        </ul>
        <ul className="navbar-nav navbar-collapse justify-content-end">
          <li>
            {!isUserLoggedIn &&<Link className="nav-link" to="/login">
              Login
            </Link>}
          </li>
          <li>
            {isUserLoggedIn && (
              <Link
                className="nav-link"
                to="/logout"
                onClick={AuthenticationService.logout}
              >
                Logout
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
