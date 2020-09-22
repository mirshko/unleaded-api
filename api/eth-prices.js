import fetch from "isomorphic-unfetch";

const ENDPOINT = `https://min-api.cryptocompare.com/data/price?fsym=ETH`;

export default async function (req, res) {
  const { fiat = "USD,GBP,EUR" } = req.query;

  try {
    const response = await fetch(`${ENDPOINT}&tsyms=${fiat}`);

    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).send("Something Went Wrong");
  }
}
