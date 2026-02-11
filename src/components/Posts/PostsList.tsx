// Коментар внизу !!!!!!!!!!!!!!!!!!
//import { Link } from "react-router"
import style from './Post/post.module.css'
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchPostById, fetchPosts } from "../../services/posts"
import { Post } from "./Post/Post"

export const PostsList = () => {
    const dispatch = useAppDispatch();
    const { posts, selectedById, loading, error } = useAppSelector(state => state.posts);

    useEffect(()=>{
        dispatch(fetchPosts())
    }, [dispatch]);

    if (loading) return <p>Завантаження постів...</p>;
    if (error) return <p>Помилка: {error}</p>;

    return (
        <>
            <hr />
            {selectedById && <Post/>}
            <hr />
            <ul className={style.list}>
                {posts.map((post) => (
                    <li key={post.id} className={style.list_item}>
                        <h2>{post.title}</h2>
                        <p>{post.userId}</p>
                        <p>{post.body}</p>
                        <button onClick={() => {dispatch(fetchPostById(post.id))}}>OPen POst</button>

                        {/*
                            !!!!!!!!!!!!!!! за допомогою LInk не міг зробити відкриття одного поста, видавало помилку:
                            "Помилка: Request failed with status code 404" 
                        */}

                        {/*<Link to={`/posts/${post.id}`}>
                            Open
                        </Link> */}
                    </li>
                ))}
            </ul>
        </>
    )
}