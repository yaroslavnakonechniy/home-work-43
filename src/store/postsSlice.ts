import { createSlice } from "@reduxjs/toolkit";
import { type PostsProps } from "../components/Posts/PostsProps";
import { fetchPostById, fetchPosts } from "../services/posts";


const initialState:PostsProps = {
    posts: [],
    selectedById: null,
    loading: false,
    error: null
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => { // Асинхронні ред'юсери
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? null;
            })

            .addCase(fetchPostById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedById = action.payload;
            })
            .addCase(fetchPostById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? null;
            });
    },
})

export default postsSlice.reducer