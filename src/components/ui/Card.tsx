import { FunctionComponent, useMemo } from "react";

import { Coin } from "../icons";
import fakeData from "../../data";

interface CardProps {
  className?: string;
  amount: number;
  description: string;
  image: string;
}

const Card: FunctionComponent<CardProps> = ({
  className,
  amount,
  description,
}) => {
  const isInsufficient = useMemo(
    () => fakeData.header.balance < amount,
    [amount]
  );

  return (
    <a
      href="#"
      className={`rounded shadow-low border overflow-hidden border-grey-800 ${className}`}
    >
      <img
        className="w-full h-[98px]"
        src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
      />
      <div className="p-4 pb-5 ">
        <h4
          className={`mb-2 flex gap-1 items-center text-base font-semibold text-dark-blue ${
            isInsufficient ? "text-grey-300" : "text-dark-blue"
          }`}
        >
          {isInsufficient && <Coin />}
          {amount} Coins
        </h4>
        <p className="mb-0 text-base text-grey-400">{description}</p>
        {isInsufficient && (
          <a className="text-sm text-dark-blue">Insufficient coins</a>
        )}
      </div>
    </a>
  );
};

Card.defaultProps = {};

export default Card;
