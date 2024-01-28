import MainNav from "./MainNav";
import TopNav from "./TopNav";

const Nav = () => {
  return (
    <div className="bg-black">
      <nav className="font-raleway space-y-0 lg:space-y-3">
        <TopNav />
        <MainNav />
      </nav>
    </div>
  );
};

export default Nav;
