import "./App.css";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
