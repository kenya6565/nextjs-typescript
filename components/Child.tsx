import { gql, useQuery } from "@apollo/client";

export const Child = () => {
  const GET_TODOS = gql`
    query GET_TODOS {
      todos {
        id
        done
        text
        user {
          id
          name
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log("loading:", loading)
    console.log(error.message);
    return <p>Error:</p>;
  }
  return <div>Child</div>;
};
