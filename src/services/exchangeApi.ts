import type { Currency } from "../types/Currency";
import type { ExchangeRateResponse } from "../types/ExchangeRate";

/* Consulta a API Frankfurter e retorna a conversão.*/

export const convertCurrency = async (
  sourceCurrency: string,
  targetCurrency: string,
): Promise<ExchangeRateResponse> => {
  const url = `https://api.frankfurter.dev/v2/rate/${sourceCurrency}/${targetCurrency}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Falha ao buscar dados de câmbio da API.");
  }

  const data: ExchangeRateResponse = await response.json();

  return data;
};

export async function getCurrencies(): Promise<Currency[]> {
  const url = "https://api.frankfurter.dev/v2/currencies";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao obter moedas.");
  }

  const data: Currency[] = await response.json();

  return data;
}
