const NavBar = () => {
  return (
    <nav className="top-50 fixed left-0 z-50 flex w-screen justify-center py-10 px-14 font-serif text-xl">
      <ul className="flex gap-20">
        <li className="relative cursor-pointer transition-all duration-200 ease-in-out after:absolute after:top-[50%] after:left-[50%] after:-z-10 after:h-0 after:w-0 after:-translate-x-[50%] after:-translate-y-[50%] after:rounded-full after:bg-mainYellow after:opacity-0 after:transition-all after:duration-200 after:ease-in-out hover:font-bold hover:text-black hover:after:h-16 hover:after:w-16 hover:after:opacity-100">
          Home
        </li>
        <li className="relative cursor-pointer transition-all duration-200 ease-in-out after:absolute after:top-[50%] after:left-[50%] after:-z-10 after:h-0 after:w-0 after:-translate-x-[50%] after:-translate-y-[50%] after:rounded-full after:bg-mainYellow after:opacity-0 after:transition-all after:duration-200 after:ease-out hover:font-bold hover:text-black hover:after:h-16 hover:after:w-16 hover:after:opacity-100">
          Story
        </li>
        <li>Donate</li>
        <li>Crew</li>
        <li>Merch</li>
        <li>BTS</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default NavBar;
