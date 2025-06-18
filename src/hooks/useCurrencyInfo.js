import { useEffect, useState } from "react";

async function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  try {
    let response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    );
    if (!response.ok) throw console.error("Response not ok");

    response = await response.json();
    setData(response[currency]);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default useCurrencyInfo;
