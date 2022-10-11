import Card from "./Card";
import { FunctionComponent } from "react";
import SnapList from "./SnapList";

interface ICrypto {
  key?: string | number | undefined;
  name: string;
  products: any[];
}

interface CryptoListProps {
  className?: string;
  cryptos: ICrypto[];
}

const CryptoList: FunctionComponent<CryptoListProps> = ({
  className,
  cryptos,
}) => {
  return (
    <section className={`py-6 ${className} mb-24`}>
      {cryptos &&
        !!cryptos.length &&
        cryptos.map((crypto) => (
          <div className="" key={crypto.key}>
            <h3 className="px-6 mb-6 text-lg font-semibold leading-6">
              {crypto.name}
            </h3>
            <SnapList className="px-6">
              {crypto.products &&
                crypto.products.map((product) => <Card {...product} />)}
            </SnapList>
          </div>
        ))}
    </section>
  );
};

CryptoList.defaultProps = {};

export default CryptoList;
