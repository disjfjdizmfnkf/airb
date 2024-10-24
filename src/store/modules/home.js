import { getHomeGoodPriceData, getHomeHighScoreData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 这里调用service中的网络请求， 返回值作为pyload，并且在extraReducers中监听fulfilled
export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  async (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceActions(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHightScoreActions(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceActions(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHightScoreActions(state, { payload }) {
      state.highScoreInfo = payload;
    },
  },
  // extraReducers 用来处理由createAsyncThunk创建的异步actions
  extraReducers: {
    // 异步函数执行后fulfilled(成功)的状态更新
    //   [fetchHomeDataAction.fulfilled](state, {payload}) {
    //     state.goodPriceInfo = payload
    //   }
  },
});

export const { changeGoodPriceActions, changeHightScoreActions } = homeSlice.actions;
export default homeSlice.reducer;
