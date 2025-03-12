import Link from "next/link";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
<nav className="bg-gray-950 px-6 py-4 flex items-center justify-between border-b border-gray-800">
  <div className="text-white text-2xl font-bold tracking-wide">Strato</div>
  <LoginButton/>
</nav>

  );
};

export default Navbar;
