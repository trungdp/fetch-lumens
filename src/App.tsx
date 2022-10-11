import { CryptoList, Header } from "./components/ui";

import { DefaultLayout } from "./layouts";
import fakeData from "./data";

const App = () => {
  return (
    <DefaultLayout>
      <Header />
      <CryptoList cryptos={fakeData.cryptos} />
    </DefaultLayout>
  );
};

export default App;
