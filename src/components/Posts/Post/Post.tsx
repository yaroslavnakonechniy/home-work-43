// я не зрозумів чому ми не отримуємо 1пост через useEffect як ми отримували пости ???
import styles from './post.module.css'
import { useAppSelector } from "../../../store/hooks"

export const Post = () => {
    const post = useAppSelector(state => state.posts.selectedById)

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