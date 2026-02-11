import axios from "axios";
import { type PostData } from "../components/Posts/Post/PostData";
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = 'https://jsonplaceholder.typicode.com';

/* export const getPosts = async():Promise<PostData[]> => {
    const response = await axios.get<PostData[]>(`${API_URL}/posts`);
    return  response.data;
}

export const getPost = async(postId:number):Promise<PostData> => {
    const response = await axios.get<PostData>(`${API_URL}/posts/${postId}`);
    return  response.data;
} */

export const fetchPosts = createAsyncThunk<PostData[]>(
    'posts/fetchPosts',
    async() => {
        const response = await axios.get<PostData[]>(`${API_URL}/posts`);
        return response.data;
    }
)

export const fetchPostById = createAsyncThunk<PostData, number>(
    'post/fetchPostById',
    async(postId) => {
        const response = await axios.get<PostData>(`${API_URL}/posts/${postId}`);
        return response.data;
    }
)