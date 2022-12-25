import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
  contacts: [
    {id: "j4Kx5mZqGAna6D9bRp-Rk", name: "Ihor Kozhemyakin" }
  ],
  filters: {
    status: "all",
  },
};
const rootReducer = (state = initialState, action) => {
  return state;
};
// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);