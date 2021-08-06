import React, { useEffect, useState, useCallback } from "react"
import { useHistory } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

//COMPONENTS
import Layout from "../../components/Layout"
import ButtonSwitch from "../../components/ButtonSwitch"
import SelectCustom from "../../components/SelectCustom"
import ListCardNews from "../../components/ListCardNews"
import LoaderSpinner from "../../components/LoaderSpinner"

//CONSTANTS
import { NEWS_OPTIONS } from "../../utils/global-constans"

//ENDPOINTS
import { getNewsByLibrary } from "../../modules/news/services"

//METHODS
import { toggleNewFromLocalStorage, verifyIsFavorite } from "../../modules/favorites/localstorage"
import { getFilterLibrary, setFilterLibrary } from "../../modules/filters/localstorage"
import formatterRawNews from "../../modules/news/formatters/formatterRawNews"

//INTERFACES
import Option from "../../modules/filters/interfaces/Option"
import New from "../../modules/news/interfaces/New"

interface MainProps { }

let page = 0

const Main: React.FC<MainProps> = () => {
  const [library, setLibrary] = useState<null | Option>(getFilterLibrary() || NEWS_OPTIONS[0])
  const [news, setNews] = useState([] as New[])
  const [hasMore, setHasMore] = useState(false)
  const history = useHistory();

  const fnOnClickButtonSwitch = (path: string) => {
    history.push(path)
  }

  const fnGetNewsByLibrary = useCallback(async () => {
    const r = await getNewsByLibrary({ library: library?.value, page })

    //DATA FILTER EXISTS PROPERTIES
    const dataFiltered = r.data.hits.filter((_new: any) => _new.author && _new.story_title && _new.story_url && _new.created_at)

    //FORMATTER RAW DATA
    const dataFormatted = formatterRawNews(dataFiltered)

    //VERIFY TO CONCAT OR SET ALL
    if (page > 0) {
      setNews(s => ([...s, ...dataFormatted]))
    } else {
      setNews(dataFormatted)
    }

    //VERIFY HASMORE
    setHasMore(r.data.nbHits > 0 ? true : false)

  }, [library])

  const fnOnChangeSelect = (_library: Option) => {
    setNews([])
    setLibrary(_library)
    setFilterLibrary(_library)
    page = 0;
  }

  const fnGetMoreResults = () => {
    page++;
    fnGetNewsByLibrary()
  }

  useEffect(() => {
    page = 0;
    fnGetNewsByLibrary()
  }, [library?.value, fnGetNewsByLibrary])

  useEffect(() => {
    //VERIFY IF EXISTS TO SET IN LOCALSTORAGE
    if (!getFilterLibrary()) {
      setFilterLibrary(NEWS_OPTIONS[0])
    }
  }, [])

  return <Layout>
    <ButtonSwitch
      style={{ margin: "70px 0 63px 0", display: "flex", justifyContent: "center" }}
      onClickButton={fnOnClickButtonSwitch}
      leftOption={{ label: "All", path: "/" }}
      rightOption={{ label: "My faves", path: "/favorites" }} />

    <SelectCustom
      style={{ marginBottom: "38px" }}
      defaultValue={library}
      options={NEWS_OPTIONS}
      onChange={fnOnChangeSelect}
    />

    <InfiniteScroll
      dataLength={news.length}
      next={fnGetMoreResults}
      hasMore={hasMore}
      loader={<LoaderSpinner style={{ marginTop: "15px", marginBottom: "15px" }} />}
      style={{ overflow: "none" }}
    >
      <ListCardNews
        news={news}
        handleToggleFavorite={toggleNewFromLocalStorage}
        verifyIsFavorite={verifyIsFavorite}
      />
    </InfiniteScroll>

  </Layout>
}

export default Main