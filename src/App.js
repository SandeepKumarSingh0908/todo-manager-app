
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import LoginComponent from "./components/LoginComponent";
import WelcomeComponent from "./components/WelcomeComponent";
import TodoListComponent from "./components/TodoListComponent";
import HeaderComponent from "./components/layout/HeaderComponent";
import FooterComponent from "./components/layout/FooterComponent";
import "./bootstrap.css";
import "./App.css"
import LogoutComponent from "./components/LogoutComponent";
const App = () => {
  return (
    <div className="TodoApp">
      <Router>
          <HeaderComponent />
        <Routes>
          <Route exact path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:name" element={<WelcomeComponent />} />
          <Route path="/todos" element={<TodoListComponent />} />
          <Route path="/logout" element={<LogoutComponent />} />
          <Route path="*" element={<ErrorComponent />} />

          
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
};

export default App;
