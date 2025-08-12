import { Link, useLocation } from "react-router-dom";
import "../Style/NavBar.css";
import LoginButton from "../Com/LoginButton";

function NavBar() {
    type NavType = {
        name: string;
        path: string;
        subPage?: { name: string; path: string }[];
    };

    const location = useLocation();

    const item: NavType[] = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Shop", path: "/shop" },
        { name: "Blog", path: "/blog" },
        {
            name: "Pages", path: "#", subPage: [
                { name: "FAQ", path: "/faq" },
                { name: "Licenses", path: "/licenses" },
                { name: "Privacy Policy", path: "/privacy#policy" },
                { name: "404", path: "/p404" },
            ]
        }
    ];

    const LoopItem = item.map((element, index) => {
        const isActive = location.pathname === element.path;
        return (
            <li key={index} className={`nav-item ${element.subPage ? "has-dropdown" : ""}`}>
                <Link to={element.path} id="linkID" className={`nav-link ${isActive ? "active" : ""}`}>
                    {element.name}
                    {element.subPage && <span className="dropdown-arrow">▼</span>}
                </Link>
                {element.subPage && (
                    <ul className="dropdown-menu">
                        {element.subPage.map((subElement, subIndex) => (
                            <li key={subIndex}>
                                <Link to={subElement.path} className="dropdown-link">
                                    {subElement.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        );
    });
    return (
        <div className="NavSection">
            <nav className="NavItemContinar">
                <div className="titemsLogo">
                    <h3 className="navItemLogo">Logo</h3>
                </div>
                <ul className="ulIcone">
                    {LoopItem}
                </ul>
                <div className="LogInButon">
                    <LoginButton />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;