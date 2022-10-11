import BalanceCard from "./BalanceCard";
import { CgChevronLeft } from "react-icons/cg";
import { FunctionComponent } from "react";
import fakeData from "../../data";

interface HeaderProps {
  className?: string;
  title?: string;
  description?: string;
}

const Header: FunctionComponent<HeaderProps> = ({
  className,
  title,
  description,
}) => {
  return (
    <section>
      <div
        className={`w-screen bg-grey-100 pb-[216px] pt-[60px] px-6 ${className}`}
      >
        <div className="h-10 mb-4">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
            <a href="#">
              <CgChevronLeft size={24} />
            </a>
          </div>
        </div>
        <h2 className="text-white text-4xl text-[32px] font-semibold mb-2">
          {title}
        </h2>
        <p className="text-base text-grey-500">{description}</p>
      </div>
      <BalanceCard />
    </section>
  );
};

Header.defaultProps = {
  title: fakeData.header.title,
  description: fakeData.header.description,
};

export default Header;
