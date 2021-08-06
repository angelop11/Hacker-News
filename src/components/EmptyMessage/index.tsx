import React from "react"

import EmptyBox from "../../static/imgs/empty-box.png"

import { Wrapper, Title, Image, Button } from "./style"

interface EmptyMessageProps {
  title: string;
  buttonValue: string;
  callback(): void;
}

const EmptyMessage: React.FC<EmptyMessageProps> = ({
  title,
  buttonValue,
  callback
}) => {
  return (
    <Wrapper>
      <Image src={EmptyBox} />
      <Title>
        {title}
      </Title>
      <Button onClick={callback}>{buttonValue}</Button>
    </Wrapper>
  )
}

export default EmptyMessage