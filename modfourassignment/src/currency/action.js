export function storevalue(data) {
  return { type: "STORE_VALUE", payload: data };
}

export function fetchCurrencies(data) {
  return {
    type: "FETCH_CURRENCIES",
    payload: data,
  };
}
export function storecurrency(data) {
    return { type: "STORE_CURRENCIES", payload: data };
  }