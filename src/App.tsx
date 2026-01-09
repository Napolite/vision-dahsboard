import "./App.css";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
