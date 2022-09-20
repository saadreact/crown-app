import { createSlice } from "@reduxjs/toolkit";
import { directoryActionTypes } from "../directory/directory.types";

export const directorySlice = createSlice({
  name: "directory",
  initialState: {
    isFetching:false,
    directoryItems: [
    ],
  },
  reducers: {
    updateDirCollection(state,action){

      switch(action.payload.type){
        case directoryActionTypes.FETCH_DIR_COLLECTIONS_START:
          return{
            ...state,
            isFetching:true
          }
          case directoryActionTypes.FETCH_DIR_COLLECTIONS_SUCCESS:
            return{
              ...state,
              isFetching:false,
              directoryItems:action.payload.payload
            }
            
          default:
            return state;
      }

    }
  },
});

export const { updateDirCollection } = directorySlice.actions;

export const directoryReducer = directorySlice.reducer;