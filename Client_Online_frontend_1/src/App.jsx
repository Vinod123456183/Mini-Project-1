import SideBar from "./Pages/SideBar";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
