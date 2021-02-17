import Link from "next/link";
import { initializeApollo } from "../lib/apolloClient";
import Name, { NAME_QUERY } from "../components/Name/Name";
import NameList, { NAME_LIST_QUERY } from "./NameList/NameList";
import Navigation from "../components/Navigation/Navigation";

const IndexPage = () => {
  return (
    <div>
      <Navigation />
      <Name />
      <Link href='/about'>
        <a>About </a>
      </Link>{" "}
      <Link href='/NameList/NameList'>
        <a>Cards </a>
      </Link>
    </div>
  );
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: NAME_LIST_QUERY,
  });

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
