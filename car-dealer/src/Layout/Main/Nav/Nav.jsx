import MainNav from "./MainNav";
import TopNav from "./TopNav";

const Nav = () => {
  return (
    <div className="bg-black">
      <nav className="font-raleway">
        <TopNav />
        <MainNav />
      </nav>
    </div>
  );
};

export default Nav;
