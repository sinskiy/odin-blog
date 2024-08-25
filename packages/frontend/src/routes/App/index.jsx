import useFetch from "../../hooks";
import Header from "../../components/Header";

function App() {
  const { data, loading, error } = useFetch("http://localhost:3000/api/posts/");

  if (loading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <Header />
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
