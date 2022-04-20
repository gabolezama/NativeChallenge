//Otorga formato a precios
export function FormatNumber({ number }) {
    let formatNumber = Number.parseFloat(number).toFixed(2);
    let str = formatNumber.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }