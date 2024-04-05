import Link from "next/link";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";

export default function Navigation() {
  return (
    <Menu
      right
      width={"60%"}
      customCrossIcon={
        <Image
          width="30"
          height="30"
          src="/icons/icon-cancel.svg"
          alt="close navigation menu"
        />
      }
      crossButtonClassName={"bm-cross-button"}
    >
      <Link href="/" className="menu-item">
        Homepage
      </Link>
      <Link href="/create" className="menu-item">
        Create Project
      </Link>
      <Link href="/projects/favorites" className="menu-item">
        Favorite Projects
      </Link>
    </Menu>
  );
}
