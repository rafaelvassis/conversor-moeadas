import type { ExchangeRateResponse } from "../../types/ExchangeRate";
import "./ResultCard.css";

type ResultCardProps = {
  amount: number;
  sourceCurrency: string;
  targetCurrency: string;
  exchangeRate: ExchangeRateResponse | null;
};

export default function ResultCard({
  amount,
  sourceCurrency,
  targetCurrency,
  exchangeRate,
}: ResultCardProps) {
  const convertedAmount = exchangeRate ? amount * exchangeRate.rate : 0;

  return (
    <div className="card__container">
      <div>
        <p className="label__output">Valor original</p>
        <p className="text__output">
          {sourceCurrency} {amount}
        </p>
      </div>
      <div>
        <p className="label__output">Valor Convertido</p>
        <p className="text__output">
          {targetCurrency} {amount * convertedAmount}
        </p>
      </div>
      <div>
        <p className="label__output">Data da consulta</p>
        <p className="text__output">{exchangeRate?.date}</p>
      </div>
    </div>
  );
}
