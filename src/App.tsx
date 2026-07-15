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

    setAmount,
    setSourceCurrency,
    setTargetCurrency,
    setExchangeRate,
    setError,
  } = useCurrencyConverter();

  function handleAmountChange(value: number) {
    setAmount(value);
    setExchangeRate(null);
    setError(null);
  }

  function handleSourceCurrencyChange(currency: string) {
    setSourceCurrency(currency);
    setExchangeRate(null);
    setError(null);
  }

  function handleTargetCurrencyChange(currency: string) {
    setTargetCurrency(currency);
    setExchangeRate(null);
    setError(null);
  }

  function handleSwapCurrencies() {
    setSourceCurrency((current) => {
      setTargetCurrency(current);
      return targetCurrency;
    });

    setExchangeRate(null);
    setError(null);
  }

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
