import { collection, onSnapshot, query } from "firebase/firestore";
import { db, updateCollectionFormat } from "../../firebase/firebase.utils";
import { shopActionTypes } from "./shop.types";
import {updateShopData} from '../slices/shopSlice';
export const fetchCollectionStart = () => ({
    type:shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSucess = (payload) => ({
    type:shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:payload
})

export const fetchCollectionError = (payload) => ({
    type:shopActionTypes.FETCH_COLLECTIONS_ERROR,
    payload:payload
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        
        const collectionRef = query(collection(db, "collection"));
        dispatch(updateShopData(fetchCollectionStart()));

        onSnapshot(collectionRef, (snapshot) => {
           const recData = updateCollectionFormat(snapshot);
           dispatch(updateShopData(fetchCollectionSucess(recData)))
        })
    }
}