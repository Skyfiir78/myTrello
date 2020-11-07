import React from "react"

import GlobalApp from "../components/GlobalAppContainer"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Board from "../components/Board"

class App extends React.Component {
    render(){
      return(
        <GlobalApp>
          <Layout>
            <Header />
            <Board />
          </Layout>
        </GlobalApp>
      )
  }
}

export default App
