import { useContext } from "react";
import Feed from "./Feed";
import DataContext from "./Context/DataContext";

// const Home = ({ posts, fetchError, isLoading }) => {
const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  return (
    <main className="Home">
      {/* {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display.</p>
      )} */}
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMag" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        // (posts.length ? (
        (searchResults.length ? (
          // <Feed posts={posts} />
          <Feed posts={<Feed posts={searchResults} />} />
        ) : (
          <p className="statusMsg">No posts to display.</p>
        ))}
    </main>
  );
};

export default Home;
