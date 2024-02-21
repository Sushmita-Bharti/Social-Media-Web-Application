import { createContext, useContext, useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (action, currPostList) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchList] = useReducer(
    PostListReducer,
    default_postList
  );

  const addPost = () => {};

  const deletePost = () => {};
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const default_postList = [
  {
    id: "1",
    Title: "Going to Varanasi",
    body: "Enjoying ghats and Galiya of this beautiful city",
    reaction: 2,
    userId: "sushmita_bharti",
    tags: ["vacation", "holicity"],
  },
  {
    id: "2",
    Title: "Exploring Sprituality",
    body: "Enjoying ghats and Galiya of this beautiful city of ganga",
    reaction: 3,
    userId: "21_bharti",
    tags: ["vacation", "holicity"],
  },
];
export default PostListProvider;
