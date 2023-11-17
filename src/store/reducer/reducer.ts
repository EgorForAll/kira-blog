import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPosts } from '../../models/IPosts';

interface IState {
  isTableView: boolean;
  posts: IPosts[];
}

const initialState: IState = {
  isTableView: true,
  posts: []
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
    }
  }
});

export default postsSlice.reducer;
