import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <div style={{ margin: "20px" }}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
};

export default App;
