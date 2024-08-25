import useFetch from "../../hooks";

export default function Posts() {
  const { data, loading, error } = useFetch("http://localhost:3000/api/posts/");

  if (loading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
