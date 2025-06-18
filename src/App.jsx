import { useState } from "react";
import { InputBox } from "./components/index.js";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const convertCurrency = () => setConvertedAmount(amount * currencyInfo[to]);

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-[#191970]">
      <div className="flex flex-col justify-center items-center mx-auto border border-gray-600/30 shadow-lg rounded-lg p-5 bg-[#4b3abb]/20">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convertCurrency();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={currencyOptions}
            selectedCurrency={from}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(newAmount) => setAmount(newAmount)}
          />
        </form>
        <div className="bg-[#4b3abb] rounded-lg px-3 py-0.5 text-white -my-3 md:text-lg border-[#4b3abb]/10 hover:border-[#0080FF] border-2 hover:shadow-lg">
          Test
        </div>
      </div>
    </div>
  );
}

export default App;
