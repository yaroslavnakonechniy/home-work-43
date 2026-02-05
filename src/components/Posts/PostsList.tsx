import { Link } from "react-router"
import { type PostsProps } from "./PostsProps"
import style from './Post/post.module.css'

export const PostsList = ({posts}: PostsProps) => {
    return (
        <>
            <ul className={style.list}>
                {posts.map((post) => (
                    <li key={post.id} className={style.list_item}>
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