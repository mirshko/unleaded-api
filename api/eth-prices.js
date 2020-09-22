import fetch from "isomorphic-unfetch";

const ENDPOINT = `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=
`;

export default async function (req, res) {
  const query = req.query;

  try {
    const response = await fetch(ENDPOINT + query.fiat);

    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).send("Something Went Wrong");
  }
}
