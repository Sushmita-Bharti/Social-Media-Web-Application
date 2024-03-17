import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/postliststore";
import LoaddingSpinner from "./LoaddingSpinner";
import Welcome from "./welcome";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoaddingSpinner />}
      {!fetching && postList.length === 0 && <Welcome />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
