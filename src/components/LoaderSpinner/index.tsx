import React, { CSSProperties } from "react"

import { Wrapper } from "./style"

interface LoaderSpinnerProps {
  style?: CSSProperties;
}

const LoaderSpinner: React.FC<LoaderSpinnerProps> = ({
  style
}) => {
  return <Wrapper style={style} />
}

export default LoaderSpinner