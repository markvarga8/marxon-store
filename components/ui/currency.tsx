"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value?: number | string;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const formattedValue =
    typeof value === "number" ? value : parseFloat(value ?? "0");

  return (
    <div className="font-semibold">
      <p>{formatter.format(formattedValue)}</p>
    </div>
  );
};

export default Currency;
