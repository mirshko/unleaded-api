import fetch from "isomorphic-unfetch";
import { convertStringToNumber, formatFixedDecimals } from "./_bignumber";

const ENDPOINT = `https://ethgasstation.info/json/gasguzz.json?api-key=XXAPI_Key_HereXXX`;

export default async function (req, res) {
  try {
    const response = await fetch(ENDPOINT);

    const data = await response.json();

    const result = data.map((guzzlerRaw) => ({
      address: guzzlerRaw.to_address,
      pct: convertStringToNumber(
        formatFixedDecimals(`${guzzlerRaw.pcttot}`, 2)
      ),
      gasused: convertStringToNumber(guzzlerRaw.gasused),
      id: guzzlerRaw.ID,
    }));

    res.json(result);
  } catch (error) {
    res.status(500).send("Something Went Wrong");
  }
}
