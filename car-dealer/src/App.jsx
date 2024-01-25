import { Outlet } from "react-router-dom";
import Nav from "./Layout/Main/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
