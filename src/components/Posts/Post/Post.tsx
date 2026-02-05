import type { PostData } from "./PostData"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../../services/posts";
import { useState } from "react";
import styles from './post.module.css'

export const Post = () => {

    const {postId} = useParams();
    const [post, setPost] = useState<PostData | null>(null);

    useEffect(() => {

        const id = Number(postId);

        if (postId === null) return;
        const fetchData = async() => {
            setPost(await getPost(id));
        }
        
        fetchData();

    }, [postId]);

    if (!post) {
        return <div>Оберіть пост</div>
    }

    return (
        <>
            <hr />
            <hr />
            <li key={post.id} className={styles.post}>
                <h4>{post.title}</h4>
                <h5>{post.body}</h5>
                <h5>{post.userId}</h5>
            </li>
            <hr />
            <hr />
        </>
    )
}