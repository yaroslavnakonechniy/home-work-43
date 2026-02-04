import { Link } from "react-router"
import { type PostsProps } from "./PostsProps"

export const PostsList = ({posts}: PostsProps) => {
    return (
        <>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.userId}</p>
                        <p>{post.body}</p>
                        <Link to={`/posts/${post.id}`}>
                            Open
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}