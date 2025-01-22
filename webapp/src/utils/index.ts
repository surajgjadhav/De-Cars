export const getFormattedCurrency = (amount: number) => {
  const CurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return CurrencyFormat.format(amount);
};

export const getFormattedAddress = (address: string) => {
  return `${address.substring(0, 6)}...${address.substring(38)}`;
};
