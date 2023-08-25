import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import TaskList from "./pages/TaskList";
import { BrowserRouter as Router, Routes,Route, Navigate } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={ <ProtectedRouted><HomePage /></ProtectedRouted>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasklist" element={<ProtectedRouted><TaskList /></ProtectedRouted>} />
      </Routes>
    </Router>
  );
}

export default App;



export const ProtectedRouted = ({children}) => {
    if (localStorage.getItem("user")) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
}
