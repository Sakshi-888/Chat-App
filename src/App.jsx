import "./App.css";
// import { Link, NavLink } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
