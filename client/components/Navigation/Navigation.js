import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <header>
      <Link href='/'>
        <a>Home</a>
      </Link>{" "}
      <Link href='/about'>
        <a>About</a>
      </Link>{" "}
      <Link href='/NameList/NameList'>Cards</Link>
    </header>
  );
};

export default Navigation;
