import { createReducer } from "@reduxjs/toolkit";
import * as actions from './actions';
import { Client } from "./types";

export interface ClientsState {
  fullClientList: Array<Client>;
  searchQuery: string;
  selectedClientIndex?: number;
}

const initialClientsState: ClientsState = {
  fullClientList: [],
  searchQuery: '',
  selectedClientIndex: null,
};

export default createReducer(initialClientsState, (builder) => {
  builder
    .addCase(actions.setFullClientList, (state, action) => {
      state.fullClientList = action.payload;
    })
    .addCase(actions.setSearchQuery, (state, action) => {
      state.searchQuery = action.payload;
    })
    .addCase(actions.setSelectedClientIndex, (state, action) => {
      state.selectedClientIndex = action.payload;
    });
});
