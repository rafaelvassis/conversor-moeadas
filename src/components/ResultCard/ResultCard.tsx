import "./ResultCard.css";

type ResultCardProps = {
  amount: number;
  sourceCurrency: string;
  targetCurrency: string;
  result: number;
  date: string;
};

export default function ResultCard({
  amount,
  sourceCurrency,
  targetCurrency,
  result,
  date,
}: ResultCardProps) {
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
          {targetCurrency} {result}
        </p>
      </div>
      <div>
        <p className="label__output">Data da consulta</p>
        <p className="text__output">{date}</p>
      </div>
    </div>
  );
}
