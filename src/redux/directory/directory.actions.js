import { directoryActionTypes } from "./directory.types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";
import { updateDirCollection } from "../slices/directorySlice";

export const fetchDirCollectionStart = () => ({
    type:directoryActionTypes.FETCH_DIR_COLLECTIONS_START,
});

export const fetchDirCollectionSucess = (payload) => ({
    type:directoryActionTypes.FETCH_DIR_COLLECTIONS_SUCCESS,
    payload:payload
})

export const fetchDirCollectionStartAsync = () => {
    return async dispatch => {
        
        var obj = [];
        dispatch(updateDirCollection(fetchDirCollectionStart()))
        const querySnapshot = await getDocs(collection(db, "directory"));

        querySnapshot.forEach((d) => {
          obj.push(d.data());
        });
        obj = obj.sort(function(a, b){return a.id - b.id});
        dispatch(updateDirCollection(fetchDirCollectionSucess(obj)))


    }
}