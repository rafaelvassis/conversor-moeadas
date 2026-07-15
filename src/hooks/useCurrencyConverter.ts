import { useState } from "react";
import type { ExchangeRateResponse } from "../types/ExchangeRate";

export function useCurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [sourceCurrency, setSourceCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("BRL");
  const [exchangeRate, setExchangeRate] = useState<ExchangeRateResponse | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

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

  return {
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
  };
}
