import { CardIcon, HomeIcon, RingIcon, UserIcon } from "../icons";

import { FunctionComponent } from "react";

interface NavbarProps {
  className?: string;
}

interface NavbarItemProps {
  className?: string;
  active?: boolean;
  children?: React.ReactNode;
}

const NavbarItem: FunctionComponent<NavbarItemProps> = ({
  className,
  active = false,
  children,
}) => {
  const activeClass =
    "before:absolute before:content-[''] before:rounded-full before:right-1 before:top-1 before:w-3 before:h-3 before:bg-dark-red";

  return (
    <div className={`relative ${active ? activeClass : ""} ${className}`}>
      {children}
    </div>
  );
};

const Navbar: FunctionComponent<NavbarProps> = ({ className }) => {
  return (
    <div
      className={`fixed w-screen left-0 bg-white bottom-0 h-24 px-6 pt-[10px] border-0 border-t border-grey-700 ${className}`}
    >
      <div className="flex justify-between h-10">
        <NavbarItem>
          <HomeIcon />
        </NavbarItem>
        <NavbarItem active>
          <RingIcon />
        </NavbarItem>
        <NavbarItem>
          <CardIcon />
        </NavbarItem>
        <NavbarItem>
          <UserIcon />
        </NavbarItem>
      </div>
    </div>
  );
};

export default Navbar;
