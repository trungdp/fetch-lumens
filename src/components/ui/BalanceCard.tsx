import { CgChevronRight } from "react-icons/cg";
import { FunctionComponent } from "react";
import background from "../../assets/images/bg-dot.svg";
import fakeData from "../../data";

interface BalanceCardProps {
  className?: string;
}

const BalanceCard: FunctionComponent<BalanceCardProps> = ({ className }) => {
  return (
    <div className="px-4 -mt-[176px]">
      <div
        className={`p-6 border bg-white rounded-lg border-[#FAFAFB] shadow-low ${className}`}
        style={{ backgroundImage: `url(${background})` }}
      >
        <span className="block mb-4 text-sm leading-6 text-grey-500">
          Available Coin balance
        </span>
        <p className="mb-8 text-5xl font-normal text-grey-100 ">
          {fakeData.header.balance}
        </p>
        <div className="relative w-full h-[5px] slide rounded-full overflow-hidden bg-grey-700 mb-8">
          <span
            className={`absolute h-[5px] left-0 bg-dark-blue  rounded-full w-2/3`}
          />
        </div>
        <p className="mb-4 text-base suggest text-grey-400">
          {fakeData.header.balanceDescription}
        </p>
        <a href="#" className="block mb-6 text-dark-blue">
          View tier benefits
          <CgChevronRight className="inline-block" size={24} />
        </a>
        <button className="text-white capitalize rounded bg-grey-100 text-center py-[18px] w-full text-lg font-semibold mb-4 leading-6">
          My Coupons
        </button>
        <p className="text-sm text-center text-grey-500">
          Updated : {fakeData.header.updated}
        </p>
      </div>
    </div>
  );
};

BalanceCard.defaultProps = {};

export default BalanceCard;
