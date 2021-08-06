import axios from "axios";

import GetNewsByLibraryDTO from "./dtos/GetNewsByLibraryDTO";

const BASE_URL_V1 = "https://hn.algolia.com/api/v1";

export const getNewsByLibrary = ({ library, page }: GetNewsByLibraryDTO) =>
  axios.get(
    `${BASE_URL_V1}/search_by_date` +
      (library ? `?query=${library}` : "") +
      ((library ? "&" : "?") + `page=${page}`)
  );
