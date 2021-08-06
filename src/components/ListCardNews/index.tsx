import React from "react"

//COMPONENTS
import CardNews from "../CardNews"
import { Wrapper } from "./style"

//INTERFACES
import New from "../../modules/news/interfaces/New"

interface ListCardNewsProps {
  news: New[];
  handleToggleFavorite(_new: New): void;
  verifyIsFavorite(newId: string): boolean;
}

const ListCardNews: React.FC<ListCardNewsProps> = ({
  news,
  handleToggleFavorite,
  verifyIsFavorite
}) => {

  return <Wrapper>
    {news.map((e: New) => (
      <CardNews
        key={e.objectID + Math.random()}
        author={e.author}
        title={e.storyTitle}
        createdAt={e.createdAt}
        storyUrl={e.storyUrl}
        isFavorite={verifyIsFavorite(e.objectID)}
        handleToggleFavorite={() => handleToggleFavorite(e)}
      />
    ))}
  </Wrapper>
}

export default ListCardNews