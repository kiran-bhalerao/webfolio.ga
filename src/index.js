import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from 'react-apollo';
import config from "./config/dev";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    credentials: "include",
    headers: {
      authorization: `Bearer ${config.AUTH_TOKEN}`
    }
  }),
  cache: new InMemoryCache()
});
const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById("root"));
