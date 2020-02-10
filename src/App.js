import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import MainPage from "../src/components/MainPage";

import client from "./api";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <MainPage />
      </ApolloProvider>
    </div>
  );
}

export default App;
