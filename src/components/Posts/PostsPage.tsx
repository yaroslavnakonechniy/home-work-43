import { useState } from "react";
import { useEffect } from "react";
import { type PostData } from "./Post/PostData";
import { PostsList } from "./PostsList";
import { getPosts } from "../../services/posts";
import { Outlet } from "react-router";

export const PostsPage = () => {
    const [posts, setPosts] = useState<PostData[]>([]);

    useEffect(() => {

        const fetchData = async() => {
            setPosts(await getPosts());
        }
        
        fetchData();

    }, []);

     return (
        <>
            <Outlet />
            <PostsList posts={posts} />
        </>
     )
}