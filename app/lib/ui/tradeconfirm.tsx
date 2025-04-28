"use client";
import { useState } from "react";

export function TradeForm({ stockId }) {
  const [loading, setLoading] = useState(false);
  const [tradeType, setTradeType] = useState("BUY");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    formData.set("type", tradeType);

    const res = await fetch("/api/market", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setLoading(false);

    if (data.error) {
      window.alert(data.error);
    } else {
      window.alert("Trade successful!");
      window.location.reload();
    }
  }

  return (
    <form action="/api/market" method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="stockId" value={stockId} />
      <input type="number" name="quantity" min={1} defaultValue={1} required />
      <button
        type="submit"
        onClick={() => setTradeType("BUY")}
        disabled={loading}
      >
        Buy
      </button>
      <button
        type="submit"
        onClick={() => setTradeType("SELL")}
        disabled={loading}
      >
        Sell
      </button>
    </form>
  );
}
