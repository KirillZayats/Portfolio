import { firebaseConfig } from "../../utils/db";
import { CHANGE_LANGUAGE, LOAD_DATA } from "../types/types"
import { getDatabase, ref, get, child } from "firebase/database";
import { initializeApp } from "firebase/app";



export const loadDataLanguage = (data: any) => {
   return {
    type: LOAD_DATA,
    data,
    isLoading: true
   }
}

export const saveLanguage = (value: string) => {
    return {
        type: CHANGE_LANGUAGE,
        payload: value
       }
}

export const loadData = () => {
    
    initializeApp(firebaseConfig);

    let data: any = [];

    const dbRef = ref(getDatabase());

    return async (dispatch: any) => {
      get(child(dbRef, `/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            data.push(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .then(() => {            
            dispatch(loadDataLanguage(data));
        })
        .catch((error) => {
          console.error(error);
        });
    };
  };