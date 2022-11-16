import { createAction } from "@reduxjs/toolkit";
import { Client } from "./types";

export const setFullClientList = createAction<Array<Client>>('CLIENTS_SET_FULL_CLIENT_LIST');

export const setSearchQuery = createAction<string>('CLIENTS_SET_SEARCH_QUERY');

export const setSelectedClientIndex =
  createAction<number>('CLIENTS_SET_SELECTED_CLIENT_INDEX');
