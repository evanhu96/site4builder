import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Site from "./components/Site";
import Tree from "./components/Tree";
import Tutorial from "./components/Tutorial";
import { SiteContext } from "./components/SiteContext";
import Node from "./helpers/Tree";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import Test from "./components/Test";
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [site, setSite] = useState(<></>);
  const [currentId, setCurrentId] = useState(1);
  const [parentId, setParentId] = useState(0);
  const [show, setShow] = useState(false);
  const [tutorial, setTutorial] = useState('introduction');
  const [tree, setTree] = useState(new Node(0, null, "Starter", {}, []));
  const defaultSite = <article></article>;
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <SiteContext.Provider
          value={{
            site: site || defaultSite,
            setSite,
            tree,
            setTree,
            currentId,
            setCurrentId,
            parentId,
            setParentId,
            show,
            setShow,
            tutorial,
            setTutorial,
          }}
        >
          {/* <Test/> */}
          <Site />
          <Tree />
          
        </SiteContext.Provider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
