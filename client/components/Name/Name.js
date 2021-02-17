import { gql, useQuery } from "@apollo/client";

const Name = () => {
  const { loading, error, data } = useQuery(NAME_QUERY);

  if (error) return <div>Error Occured</div>;
  if (loading) return <div>Loading ...</div>;

  const { firstName, lastName } = data.name;
  return (
    <div>
      <h1>
        Welcome
        <span> {data.loading ? ".." : `${firstName} ${lastName}`}</span>
      </h1>
    </div>
  );
};

export const NAME_QUERY = gql`
  query name {
    name {
      firstName
      lastName
    }
  }
`;

export default Name;
