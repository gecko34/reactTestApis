import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Header.scss";

const Header = () => {

  const location = useLocation();

  return (
    <header>
      <nav>
          <Link to="bb">
            <div className={location.pathname === "/bb" ? "menu-select" : "menu"}>
              Breaking Bad
            </div>
          </Link>

          <Link to="macaron">
            <div className={location.pathname === "/macaron" ? "menu-select" : "menu"}>
              Macaron
            </div>
          </Link>

          <Link to="amiibos">
            <div className={location.pathname === "/amiibos" ? "menu-select" : "menu"}>
              Amiibos
            </div>
          </Link>

          <Link to="memo">
            <div className={location.pathname === "/memo" ? "menuMemo-select" : "menuMemo"}>
              Mes cards
            </div>
          </Link>

      </nav>
    </header>
  );
};


export default Header;
