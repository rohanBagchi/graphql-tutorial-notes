import { useQuery, gql } from "@apollo/client";
import DisplayLocations from "./DisplayLocations";
import { Query } from "./gql-types";

const GET_Books = gql`
  query GetBooks {
    books {
      title
      author
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery<Query>(GET_Books);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {data?.books && data.books.map((book, index) => (
          <tr key={index}>
            <td>{book?.title}</td>
            <td>{book?.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br />
      <Books />
    </div>
  );
}
