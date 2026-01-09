import "./App.css";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Dashboard from "./pages/Dashboalrd";

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
