import style from "../Navbar/style.module.scss";
import Link from "next/link";

function Navbar() {
  return (
    <div className={style.Navbar}>
      <ul>
        <Link href="/">
          <a className={style.Home}>Home</a>
        </Link>
        <Link href="/weapons">
          <a>Weapons</a>
        </Link>
        <Link href="/armors">
          <a>Armors</a>
        </Link>
        <Link href="/creatures">
          <a>Creatures</a>
        </Link>
        <Link href="/lore">
          <a>Lore</a>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
