import store from "store";

import { FILTER_LIBRARY } from "./constants"

import Option from "./interfaces/Option"

export const getFilterLibrary = () => {
  return store.get(FILTER_LIBRARY) ?? null
}

export const setFilterLibrary = (library: Option) => {
  return store.set(FILTER_LIBRARY, library)
}