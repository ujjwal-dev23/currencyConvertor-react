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
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#191970]">
      <div className="text-white flex flex-wrap text-5xl mb-15 text-center">
        <h1>Currency Converter</h1>&nbsp;
        <h1 className="text-blue-500">React</h1>
      </div>
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
        <div className="bg-blue-500 rounded-lg px-3 py-0.5 text-white -my-3 md:text-lg border-blue-500 hover:border-[#4b3abb] border-2 shadow-lg z-1">
          <button onClick={swapCurrencies}>Swap</button>
        </div>
        <InputBox
          label="To"
          currencyOptions={currencyOptions}
          amountDisabled
          amount={convertedAmount.toFixed(2)}
          selectedCurrency={to}
          onCurrencyChange={(currency) => setTo(currency)}
          onAmountChange={(amount) => setAmount(amount)}
        />
        <button
          className="w-full bg-blue-500 text-white rounded-lg mt-3 p-1.5 border-2 border-blue-500 hover:border-white"
          onClick={convertCurrency}
        >
          Convert {from.toUpperCase()} To {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
