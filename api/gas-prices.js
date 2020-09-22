import fetch from "isomorphic-unfetch";
import { convertStringToNumber, divide, multiply } from "./_bignumber";

const ENDPOINT = `https://ethgasstation.info/api/ethgasAPI.json?api-key=${process.env.DEFI_PULSE_API_KEY}`;

export default async function (req, res) {
  try {
    const response = await fetch(ENDPOINT);

    const data = await response.json();

    const result = {
      timestamp: Date.now(),
      slow: {
        time: convertStringToNumber(multiply(data.safeLowWait, 60)),
        price: convertStringToNumber(divide(data.safeLow, 10)),
      },
      average: {
        time: convertStringToNumber(multiply(data.avgWait, 60)),
        price: convertStringToNumber(divide(data.average, 10)),
      },
      fast: {
        time: convertStringToNumber(multiply(data.fastWait, 60)),
        price: convertStringToNumber(divide(data.fast, 10)),
      },
      fastest: {
        time: convertStringToNumber(multiply(data.fastestWait, 60)),
        price: convertStringToNumber(divide(data.fastest, 10)),
      },
    };

    res.json(result);
  } catch (error) {
    res.status(500).send("Something Went Wrong");
  }
}
