import { combineReducers } from "redux";
import { languageReducer } from "./languageReduces";

export const rootReducer = combineReducers({
  language: languageReducer,
});

export type RootState = ReturnType<typeof rootReducer>
