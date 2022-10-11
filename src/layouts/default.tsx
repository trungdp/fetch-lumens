import { FunctionComponent, ReactNode } from "react";

import { Navbar } from "../components/common";

interface DefaultLayoutProps {
  className?: string;
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({
  className,
  children,
}) => {
  return (
    <div className={`mb-24 ${className}`}>
      {children}
      <Navbar />
    </div>
  );
};

export default DefaultLayout;
