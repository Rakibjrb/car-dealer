import { Outlet } from "react-router-dom";
import Nav from "./Layout/Main/Nav/Nav";
import Footer from "./Layout/Main/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
