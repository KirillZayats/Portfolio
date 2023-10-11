import { FIELD_LANGUAGE } from "../../additionally/constants";
import { ILanguage } from "../../additionally/interfaces";
import { getCookie, setCookies } from "../../storage/cookie";
import { CHANGE_LANGUAGE, LOAD_DATA } from "../types/types";

const initialState = {
  name: "",
  isLoading: false,
  data: {},
};

export const languageReducer = (state = initialState, action: ILanguage) => {
  switch (action.type) {
    case LOAD_DATA:
      let typeLanguage = getCookie(FIELD_LANGUAGE);
      return {
        name: typeLanguage ? typeLanguage : "RU",
        data: action.data,
        isLoading: action.isLoading,
      };
    case CHANGE_LANGUAGE:
      setCookies(FIELD_LANGUAGE, action.payload);
      return {
        name: action.payload,
        data: state.data,
        isLoading: state.isLoading,
      };
    default:
      return state;
  }
};
