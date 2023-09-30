export class Formatter {
  static NumberWithDecimal(number: number, decimalPlaces: number) {
    return number.toLocaleString(undefined, {
      minimumFractionDigits: decimalPlaces,
    });
  }
}
