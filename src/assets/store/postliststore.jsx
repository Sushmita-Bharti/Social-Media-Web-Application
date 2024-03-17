import {
  createContext,
  useCallback,
  useReducer,
  useState,
  useEffect,
} from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  fetching: false,
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newpostList = currPostList;
  if (action.type === "delete_post") {
    newpostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "add_initial_posts") {
    newpostList = action.payload.posts;
  } else if (action.type === "add_post") {
    console.log("Main yaha hoon");
    newpostList = [action.payload.post, ...currPostList];
  }
  console.log(newpostList);
  return newpostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchList] = useReducer(PostListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchList({
      type: "add_post",
      payload: {
        post,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchList({
      type: "add_initial_posts",
      payload: {
        posts,
      },
    });
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchList({
        type: "delete_post",
        payload: {
          postId,
        },
      });
    },
    [dispatchList]
  );

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up UseEffect.");
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, fetching, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
