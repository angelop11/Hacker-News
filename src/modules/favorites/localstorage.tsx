import store from "store";

import { NEWS } from "./constants"
import New from "../news/interfaces/New"

export const getNewsFromLocalStorage = (page: number) => {
  const storageResult = store.get(NEWS)
  let hasMore = false;

  if (typeof page === "number" && storageResult) {
    const limit = 16;

    //SLICE OF FAVS
    const result = storageResult.slice((page > 0 ? page : 0) * limit, limit * (page > 0 ? page + 1 : 1)) ?? []

    //VERIFY NEXTPAGE
    const maxPage = Math.ceil(storageResult.length / limit)
    if (page + 1 < maxPage) {
      hasMore = true
    }

    return { data: result, hasMore }
  } else {
    return { data: [], hasMore }
  }
}

export const addNewToLocalStorage = (newToAdd: New) => {
  let currentNews = store.get(NEWS) ?? []

  currentNews.push(newToAdd)

  store.set(NEWS, currentNews)
}

export const removeNewFromLocalStorage = (newId: string) => {
  let currentNews = store.get(NEWS) ?? []
  currentNews = currentNews.filter((_new: New) => _new.objectID !== newId)

  store.set(NEWS, currentNews)
}

export const toggleNewFromLocalStorage = (_new: New) => {
  let currentNews = store.get(NEWS) ?? []

  const existsNew = currentNews.findIndex((auxNew: New) => auxNew.objectID === _new.objectID)
  if (existsNew === -1) {
    addNewToLocalStorage(_new)
  } else {
    removeNewFromLocalStorage(_new.objectID)
  }
}

export const verifyIsFavorite = (newId: string) => {
  let currentNews = store.get(NEWS) ?? []
  const existsNew = currentNews.findIndex((auxNew: New) => auxNew.objectID === newId)

  return existsNew === -1 ? false : true
}