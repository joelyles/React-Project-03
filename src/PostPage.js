import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  return (
    <main className="PostPage">
      <article className="post">
        {post &&
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.dateTime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}><button className="editbutton">Edit</button></Link>
            <button className="deletebutton" onClick={() => handleDelete(post.id)}>Delete</button>
          </>
        }
        {!post &&
          <>
            <p>there is nothing to display</p>
            <p>please visit our home page</p>
            <p>
            <Link to="/">Home</Link>
            </p>
          </>
        }
      </article>
    </main>
  );
}

export default PostPage