import { initializeApollo } from "../lib/apolloClient";
import Name, { NAME_QUERY } from "../components/Name/Name";
import Navigation from "../components/Navigation/Navigation";

const IndexPage = () => {
  return (
    <div>
      <Navigation />
      <Name />
    </div>
  );
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: NAME_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default IndexPage;
