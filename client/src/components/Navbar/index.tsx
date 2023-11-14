import { Link } from "react-router-dom";

const NavbarLink = ({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) => (
  <div className="my-auto sm:text-left text-center">
    <Link to={path} className="text-sm hover:underline">
      {children}
    </Link>
  </div>
);

const Navbar = () => {
  const paths = [
    { path: "/home", text: "Home" },
    { path: "/chat", text: "Random Chat" },
  ];

  return (
    <nav className="w-full bg-lime-500 shadow-lg z-100">
      <div className="container  mx-auto py-3">
        <div className="flex flex-col justify-between content-center">
          <div id="logo" className="text-center">
            <h1 className="text-3xl font-mono">Chats@pp!</h1>
          </div>
          <div
            id="navigation"
            className="flex md:flex-row sm:flex-row flex-col md:gap-4 sm:gap-4 gap-2 justify-center"
          >
            {paths.map((link) => (
              <NavbarLink key={link.path} path={link.path}>
                {link.text}
              </NavbarLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
