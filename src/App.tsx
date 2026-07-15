import ConverterForm from "./components/ConverterForm/ConverterForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ResultCard from "./components/ResultCard/ResultCard";
import FeedbackMessage from "./components/FeedbackMessage/FeedbackMessage";
import { useCurrencyConverter } from "./hooks/useCurrencyConverter";

function App() {
  const {
    amount,
    sourceCurrency,
    targetCurrency,
    exchangeRate,
    error,

    handleAmountChange,
    handleSourceCurrencyChange,
    handleTargetCurrencyChange,
    handleSwapCurrencies,

    setExchangeRate,
    setError,
  } = useCurrencyConverter();

  return (
    <>
      <Header />
      <ConverterForm
        amount={amount}
        sourceCurrency={sourceCurrency}
        targetCurrency={targetCurrency}
        onAmountChange={handleAmountChange}
        onSourceCurrencyChange={handleSourceCurrencyChange}
        onTargetCurrencyChange={handleTargetCurrencyChange}
        onSwapCurrencies={handleSwapCurrencies}
        setExchangeRate={setExchangeRate}
        setError={setError}
      />
      {error && <FeedbackMessage message={error} />}
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
