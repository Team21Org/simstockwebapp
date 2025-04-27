import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { tradeAction } from "../actions";

export async function TradeForm({
  stockId,
  maxQuantity,
}: {
  stockId: string;
  maxQuantity: number;
}) {
  const router = useRouter();
  const [state, formAction] = useActionState(tradeAction, {});

  if (state?.error) {
    window.alert(state.error);
    router.refresh();
  } else if (state?.success) {
    window.alert("Trade successful!");
    router.refresh();
  }

  return (
    <form action={formAction}>
      <input type="hidden" name="stockId" value={stockId} />
      <input
        type="number"
        name="quantity"
        min={1}
        max={maxQuantity}
        defaultValue={1}
        required
      />
      <button type="submit" name="type" value="BUY">
        Buy
      </button>
      <button type="submit" name="type" value="SELL">
        Sell
      </button>
    </form>
  );
}
