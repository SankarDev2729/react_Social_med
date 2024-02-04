import { useContext } from "react";
import Post from "./Post";
import DataContext from "./Context/DataContext";

// const Feed = ({ posts }) => {
const Feed = () => {
  const { searchResults } = useContext(DataContext);
  return (
    <>
      {/* {posts.map((post) => ( */}
      {searchResults.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Feed;
