import Routes from "./Routes";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Routes />
    </>
  );
}

export default App;
