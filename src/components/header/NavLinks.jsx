"use client";

import Link from "next/link";
import HoverMenu from "./HoverMenu";
import navItems from "@/data/navItems";
const NavLinks = ()=> {
  return (
    <nav className="flex gap-6 text-sm font-medium items-center text-gray-700 relative ">
      {navItems.map((item) =>
        item.subItems && item.subItems.length > 0 ? (
          <HoverMenu key={item.label} item={item} />
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-blue-700 transition-colors"
          >
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
};
export default NavLinks;
