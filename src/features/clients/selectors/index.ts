import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { CLIENT_KEYS_TO_NOT_SEARCH } from "../constants";
import { Client } from "../types";

export const selectClientSearchQuery: (state: RootState) => string = (state) =>
  state.clients.searchQuery;

export const selectFullClientList: (state: RootState) => Array<Client> = (state) =>
  state.clients.fullClientList || [];

export const selectSelectedClientIndex: (state: RootState) => number = (state) =>
  state.clients.selectedClientIndex;

export const selectSelectedClient = createSelector(
  selectFullClientList,
  selectSelectedClientIndex,
  (clientList, selectedClientIndex) => {
    if (typeof selectedClientIndex === 'number' && clientList[selectedClientIndex]) {
      return clientList[selectedClientIndex];
    }
    return null;
  }
);

export const selectClientsToDisplay = createSelector(
  selectFullClientList,
  selectClientSearchQuery,
  (clientList, searchQuery) => {
    if (!searchQuery) {
      return clientList;
    }
    const result = clientList.filter((client) => {
      for (var clientKey in client) {
        const k = clientKey as keyof Client;
        const v = client[k];
        if (!CLIENT_KEYS_TO_NOT_SEARCH.includes(k) &&
          v &&
          v.toLocaleLowerCase().indexOf(searchQuery.toLowerCase()) > -1) {
          return true;
        }
      }
      return false;
    });
    return result;
  }
);
