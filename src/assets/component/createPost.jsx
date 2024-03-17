import { useContext, useRef } from "react";
import { MdAddReaction } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { PostList } from "../store/postliststore";
import { useNavigate } from "react-router-dom";
import App from "../../App";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userId = useRef();
  const postTilte = useRef();
  const postBody = useRef();
  const reactions = useRef();
  const tags = useRef();

  const handleSubmit = () => {
    event.preventDefault();
    const userIdData = userId.current.value;
    const TilteData = postTilte.current.value;
    const bodyData = postBody.current.value;
    const reactionData = reactions.current.value;
    const tagsData = tags.current.value.split(" ");

    userId.current.value = " ";
    postTilte.current.value = " ";
    postBody.current.value = " ";
    reactions.current.value = " ";
    tags.current.value = " ";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: TilteData,
        body: bodyData,
        userId: userIdData,
        reactions: reactionData,
        tags: tagsData,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
      });
  };
  <PostList></PostList>;
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <center>
          <h2>Create your post</h2>
        </center>
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          ref={userId}
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTilte}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postBody" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBody}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactions}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tags}
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
