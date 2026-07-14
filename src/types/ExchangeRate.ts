export type FrankfurterResponse  = {
  amount: number;
  base: string;
  date: string;
  rates: Record<string, number>;
};