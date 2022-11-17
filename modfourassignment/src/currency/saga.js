import { call, put, takeEvery,takeLatest } from "redux-saga/effects";
import Cookies from "js-cookie";


  function* fetchAPI(){
        const res =  yield fetch(
        "https://webmaster-fake-api.herokuapp.com/currencies",
        {
          method: "GET",
          headers: {
            "Authorization":`Bearer ${(Cookies.get("token"))}`
          },
         
          })
          const results= yield res.json()
          return results


}
  function* fetchCurrency(){
    const result = yield call(fetchAPI);
    yield put({
        type: "STORE_CURRENCIES",
        payload: result,
      });
}

export default function* myWatcher(){
    yield takeLatest("FETCH_CURRENCIES", fetchCurrency);

}