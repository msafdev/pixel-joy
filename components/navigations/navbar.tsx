// Components
import MenuBar from "./menubar";
import NavItem from "./navitem";

const Navbar = () => {
  return (
    <header className="w-full flex items-center pad-x relative">
      <nav className="flex w-full items-center py-6 gap-x-8">
        {/* Logo */}
        <div className="w-fit flex items-start md:items-center gap-x-1 group peer cursor-pointer">
          <h1 className="text-xl md:text-2xl uppercase z-10 bg-background leading-none md:leading-normal">
            Pixel
          </h1>
          <h1 className="font-semibold text-xl md:text-2xl uppercase md:-translate-x-14 group-hover:translate-x-0 md:anim leading-none md:leading-normal">
            Joy
          </h1>
        </div>

        {/* Location & Navigation */}
        <NavItem />

        {/* Menubar */}
        <MenuBar />
      </nav>
    </header>
  );
};
export default Navbar;
