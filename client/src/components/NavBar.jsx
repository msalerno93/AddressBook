import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", link: "home" },
    { id: 3, name: "Contacts", link: "allcontacts" },
    // { id: 4, name: "Technology", link: "technology" },
    // { id: 5, name: "Contact", link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black fixed bg-purple-600">
      <div>
        <h1 className="text-4xl font-bold ml-2">
          <Link to="/home">
          Address Book
          </Link>
        </h1>
      </div>
      <ul className="hidden md:flex">
        {navLinks.map(({ name, id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-bold text-2xl text-black hover:scale-110 duration-200"
            >
              <Link to={link} duration={500}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-purple-900 to-purple-600 text-black">
          {navLinks.map(({ id, name, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl text-black hover:scale-110 duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                duration={500}
              >
                <Link onClick={() => setNav(!nav)} to={link} duration={500}>{name}</Link>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;