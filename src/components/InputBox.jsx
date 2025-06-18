import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  className = "",
}) {
  const id = useId();
  return (
    <div
      className={`bg-[#6A5ACD] px-4 pt-2 pb-5 rounded-lg text-sm md:text-lg flex ${className}`}
    >
      <div className="w-1/2">
        <label htmlFor={id} className="inline-block mb-2 text-white">
          {label}
        </label>
        <input
          className="outline-none w-full bg-white px-1 md:px-2 py-1.5 rounded-lg"
          type="number"
          name=""
          id={id}
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(parseInt(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-end">
        <label className="text-purple-200 mb-2 w-full">Currency Type</label>
        <select
          name=""
          id=""
          className="rounded-lg p-1 bg-white cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
