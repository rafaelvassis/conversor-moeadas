import { useState } from "react";
import ConverterForm from "./components/ConverterForm/ConverterForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ResultCard from "./components/ResultCard/ResultCard";

function App() {
  const [amount, setAmount] = useState<number>(0);
  const [sourceCurrency, setSourceCurrency] = useState<string>("USD");
  const [targetCurrency, setTargetCurrency] = useState<string>("BRL");
  const [result, setResult] = useState<number>(0);
  const [date, setDate] = useState<string>("__/__/____");

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
        setResult={setResult}
        setDate={setDate}
      />
      <ResultCard
        amount={amount}
        sourceCurrency={sourceCurrency}
        targetCurrency={targetCurrency}
        result={result}
        date={date}
      />
      <Footer />
    </>
  );
}

export default App;
