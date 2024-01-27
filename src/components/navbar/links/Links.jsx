"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavbarLink from "./navbarLink/navbarLink";
import Image from "next/image";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavbarLink item={link} key={link.path} />
        ))}
        {session ? (
          <>
            {" "}
            {isAdmin && (
              <NavbarLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavbarLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((value) => !value)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavbarLink item={link} key={link.path} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
