import { useState } from "react";
import ConverterForm from "./components/ConverterForm/ConverterForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ResultCard from "./components/ResultCard/ResultCard";
import type { ExchangeRateResponse } from "./types/ExchangeRate";

function App() {
  const [amount, setAmount] = useState<number>(0);
  const [sourceCurrency, setSourceCurrency] = useState<string>("USD");
  const [targetCurrency, setTargetCurrency] = useState<string>("BRL");
  const [exchangeRate, setExchangeRate] =
    useState<ExchangeRateResponse | null>(null);

  return (
    <>
      <Header />
      <ConverterForm
        amount={amount}
        setAmount={setAmount}
        sourceCurrency={sourceCurrency}
        setSourceCurrency={setSourceCurrency}
        targetCurrency={targetCurrency}
        setTargetCurrency={setTargetCurrency}
        setExchangeRate={setExchangeRate}
      />
      <ResultCard
        amount={amount}
        sourceCurrency={sourceCurrency}
        targetCurrency={targetCurrency}
        exchangeRate={exchangeRate}
      />
      <Footer />
    </>
  );
}

export default App;
