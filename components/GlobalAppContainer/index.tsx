import React from "react"
import styled from "styled-components"

import { GlobalAppContainer } from "./style"

interface Props {
 children?: any
}



const GlobalApp: React.FC<Props> = (props) => {
  return(
    <GlobalAppContainer>
      {props.children}
    </GlobalAppContainer>
  )
}

export default GlobalApp
