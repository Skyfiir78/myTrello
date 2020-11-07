import React from "react"
import { Container } from "./style"

interface Props {
  children?: any
}

const Layout: React.FC = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Layout
