import { useState } from "react";
import "./ConverterForm.css";
import { convertCurrency } from "../../services/exchangeApi";
import type { ExchangeRateResponse } from "../../types/ExchangeRate";

export default function ConverterForm() {
  const [amount, setAmount] = useState<number>(0);
  const [sourceCurrency, setSourceCurrency] = useState<string>("USD");
  const [targetCurrency, setTargetCurrency] = useState<string>("BRL");

  function handleSwapCurrencies(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const currentSource = sourceCurrency;

    setSourceCurrency(targetCurrency);
    setTargetCurrency(currentSource);
  }

  async function handleConvert(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (amount <= 0) {
      return;
    }

    const data: ExchangeRateResponse = await convertCurrency(
      sourceCurrency,
      targetCurrency,
    );


    console.log(data);
    // Falta implementar o que fazer com o retorno da chamada da API
  }

  return (
    <form className="converter-form" onSubmit={handleConvert}>
      <div className="converter-form__group">
        <label htmlFor="sourceAmount">Valor</label>
        <input
          type="number"
          min="0"
          step="0.01"
          id="sourceAmount"
          name="sourceAmount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>

      <div className="converter-form__group">
        <label htmlFor="sourceCurrency">De: </label>
        <select
          id="sourceCurrency"
          value={sourceCurrency}
          onChange={(e) => setSourceCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="BRL">BRL</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <button
        type="button"
        className="converter-form__swap-btn"
        onClick={handleSwapCurrencies}
      >
        ⇅
      </button>

      <div className="converter-form__group">
        <label htmlFor="targetCurrency">Para: </label>
        <select
          id="targetCurrency"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="BRL">BRL</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <button type="submit" className="converter-form__submit-btn">
        Converter
      </button>
    </form>
  );
}
