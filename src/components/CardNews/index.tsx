import React, { useState } from "react"
import { IoTimeOutline } from "react-icons/io5"
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io"

import { Wrapper, ContainerLeft, Title, CreatedAtContainer, CreatedAtText, ContainerRight } from "./style"

interface CardNewsProps {
  title: string;
  createdAt: Date;
  isFavorite: boolean;
  storyUrl: string;
  author: string;
  handleToggleFavorite: () => void;
}

const CardNews: React.FC<CardNewsProps> = ({
  author,
  title,
  createdAt,
  isFavorite,
  storyUrl,
  handleToggleFavorite
}) => {
  const [_isFavorite, _setIsFavorite] = useState(isFavorite)

  const fnToggleIsFavorite = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    _setIsFavorite(s => !s)
    handleToggleFavorite()
  }

  const fnOpenLink = () => {
    window.open(storyUrl, "_blank");
  }

  return (
    <Wrapper onClick={fnOpenLink}>
      <ContainerLeft>
        <CreatedAtContainer>
          <IoTimeOutline size={17} color="#767676" />
          <CreatedAtText>{`${createdAt} by ${author}`}</CreatedAtText>
        </CreatedAtContainer>
        <Title>
          {title}
        </Title>
      </ContainerLeft>
      <ContainerRight>
        {
          _isFavorite ?
            <IoMdHeart color="red" size={27} style={{ cursor: "pointer" }} onClick={fnToggleIsFavorite} />
            :
            <IoMdHeartEmpty color="red" size={27} style={{ cursor: "pointer" }} onClick={fnToggleIsFavorite} />
        }
      </ContainerRight>
    </Wrapper>
  )
}

export default CardNews