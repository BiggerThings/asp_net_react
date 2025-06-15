import { Link } from "react-router";

type NavbarProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

function Navbar({ isOpen, toggleMenu } : NavbarProps) {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Counter", path: "/counter" },
        { name: "Weather", path: "/weather" },
        { name: "MyCompo", path: "/mycompo" },
    ];
    
    return (
        <nav
            className={`${
                isOpen ? "flex" : "hidden"
            } w-full md:w-1/2 px-4 py-6 md:px-0 md:justify-end absolute md:static top-20 left-0 md:flex bg-black`}        
        >
            <ul className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            to={item.path}
                            className="hover:text-blue-500 transition-colors"
                            onClick={toggleMenu} // Close menu on click
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default Navbar
