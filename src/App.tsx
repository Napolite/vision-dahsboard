import "./App.css";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="flex max-h-[100vh] overflow-hidden">
      <SideBar />
      <div className="flex-1 overflow-auto">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
