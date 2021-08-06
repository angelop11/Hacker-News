import React, { useEffect, useState, useCallback } from "react"
import { useHistory } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

//COMPONENTS
import Layout from "../../components/Layout"
import ButtonSwitch from "../../components/ButtonSwitch"
import ListCardNews from "../../components/ListCardNews"
import LoaderSpinner from "../../components/LoaderSpinner"
import EmptyMessage from "../../components/EmptyMessage"

//METHODS
import { toggleNewFromLocalStorage, verifyIsFavorite, getNewsFromLocalStorage } from "../../modules/favorites/localstorage"

//INTERFACES
import New from "../../modules/news/interfaces/New"

interface FavoritesProps { }

let page = 0

const Favorites: React.FC<FavoritesProps> = () => {
  const [favorites, setFavorites] = useState([] as New[])
  const [hasMore, setHasMore] = useState(false)
  const history = useHistory();

  const fnOnClickButtonSwitch = (path: string) => {
    history.push(path)
  }

  const fnGetNewsFavorites = useCallback(async () => {
    const { data, hasMore } = getNewsFromLocalStorage(page)

    setHasMore(hasMore)

    //VERIFY TO CONCAT OR SET ALL
    if (page > 0) {
      setFavorites(s => ([...s, ...data]))
    } else {
      setFavorites(data)
    }
  }, [])

  const fnGetMoreResults = () => {
    page++;
    fnGetNewsFavorites()
  }

  const handleRemoveFavoriteFromList = (favorite: New) => {
    toggleNewFromLocalStorage(favorite)
    setFavorites(s => (s.filter((fav: New) => fav.objectID !== favorite.objectID)))
  }

  useEffect(() => {
    page = 0;
    fnGetNewsFavorites()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Layout>
    <ButtonSwitch
      style={{ margin: "70px 0 63px 0", display: "flex", justifyContent: "center" }}
      onClickButton={fnOnClickButtonSwitch}
      leftOption={{ label: "All", path: "/" }}
      rightOption={{ label: "My faves", path: "/favorites" }} />

    <InfiniteScroll
      dataLength={favorites.length}
      next={fnGetMoreResults}
      hasMore={hasMore}
      loader={<LoaderSpinner />}
      style={{ overflow: "none" }}
    >
      <ListCardNews
        news={favorites}
        handleToggleFavorite={handleRemoveFavoriteFromList}
        verifyIsFavorite={verifyIsFavorite}
      />
    </InfiniteScroll>
    <>
      {favorites.length === 0 ?
        <EmptyMessage
          title={"You do not have favorites yet, choose your first favorites :)"}
          buttonValue={"Search favorites"}
          callback={() => { history.push("/") }}
        />
        : null
      }

    </>
  </Layout>
}

export default Favorites