import React from "react"
import { Container } from "./style"
import { Row, Col } from 'antd';
import TaskContainer from "./taskContainer"

interface Props {
  children?: any
}

const Board: React.FC = ({children}) => {
  return (
    <Container>
      <TaskContainer />
    </Container>
  )
}

export default Board
