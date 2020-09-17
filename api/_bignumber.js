import BigNumber from "bignumber.js";

export function convertNumberToString(value) {
  return new BigNumber(`${value}`).toString();
}

export function convertStringToNumber(value) {
  return new BigNumber(`${value}`).toNumber();
}

export function multiply(numberOne, numberTwo) {
  return new BigNumber(`${numberOne}`)
    .times(new BigNumber(`${numberTwo}`))
    .toString();
}

export function divide(numberOne, numberTwo) {
  return new BigNumber(`${numberOne}`)
    .dividedBy(new BigNumber(`${numberTwo}`))
    .toString();
}

export function formatFixedDecimals(value, decimals) {
  const _value = convertNumberToString(value);
  const _decimals = convertStringToNumber(decimals);
  const result = new BigNumber(
    new BigNumber(_value).toFixed(_decimals)
  ).toString();
  return result;
}
