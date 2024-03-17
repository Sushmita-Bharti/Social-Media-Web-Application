import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { PostList } from "../store/postliststore";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post_card" style={{ width: "38rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDeleteOutline />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div class="alert alert-primary reaction" role="alert">
          This post has {post.reactions} reaction, by people.
        </div>
      </div>
    </div>
  );
};
export default Post;
