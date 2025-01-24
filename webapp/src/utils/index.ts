export const getFormattedCurrency = (amount: number | bigint) => {
  const CurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return CurrencyFormat.format(amount);
};

export const getFormattedAddress = (address: string) => {
  return `${address.substring(0, 6)}...${address.substring(38)}`;
};

export const formatUSDC = (amount: bigint) => {
  const usdcPrecision = BigInt(1000000);
  const integerPart = amount / usdcPrecision;
  const fractionalPart = amount % usdcPrecision;

  const localizedInteger = integerPart.toLocaleString("en-US");
  const formattedFraction = fractionalPart
    .toString()
    .padStart(6, "0")
    .slice(0, 2);

  return `${localizedInteger}.${formattedFraction}`;
};
