import { type PostData } from "./Post/PostData"

export type PostsProps = {
    posts: PostData[],
    selectedById: PostData | null,
    loading: boolean,
    error: string | null,
}
