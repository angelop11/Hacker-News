import React, { ReactChildren, ReactChild } from "react"

import { Wrapper, Header, HeaderContent, Body, BodyContent, Title } from "./style"

interface LayoutProps {
  children: ReactChildren | ReactChild | ReactChildren[] | ReactChild[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Wrapper >
    <Header>
      <HeaderContent>
        <Title>HACKER NEWS</Title>
      </HeaderContent>
    </Header>
    <Body>
      <BodyContent>
        {children}
      </BodyContent>
    </Body>
  </Wrapper>
}

export default Layout