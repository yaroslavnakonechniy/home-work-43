import { PostsList } from "./PostsList";
import { Outlet } from "react-router";

export const PostsPage = () => {


     return (
        <>
            <Outlet />
            <PostsList />
        </>
     )
}