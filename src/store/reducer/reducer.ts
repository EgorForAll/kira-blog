import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPosts } from '../../models/IPosts';

interface IState {
  isTableView: boolean;
  posts: IPosts[];
  currentPost: IPosts | null;
}

const initialState: IState = {
  isTableView: true,
  posts: [],
  currentPost: null
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPosts(state, action: PayloadAction<IPosts[]>) {
      state.posts = action.payload;
    },
    setListView(state) {
      state.isTableView = false;
    },
    setTableView(state) {
      state.isTableView = true;
    },
    setCurrentPost(state, action: PayloadAction<IPosts | null>) {
      state.currentPost = action.payload;
    }
  }
});

export default postsSlice.reducer;
