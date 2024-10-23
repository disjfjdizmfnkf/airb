import { getHomeGoodPriceData } from '@/services'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload) => {
  const res = await getHomeGoodPriceData()
  return res
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    productList: {}
  },
  reducers: {
    changeGoodPriceActions(state, {payload}) {
      state.productList = payload
    }
  },
  // extraReducers 用来处理由createAsyncThunk创建的异步actions
  extraReducers: {
    // 异步函数执行后fulfilled(成功)的状态更新
    [fetchHomeDataAction.fulfilled](state, {payload}) {
      state.goodPriceInfo = payload
      
    }
  }
})


export const { changeGoodPriceActions } = homeSlice.actions
export default homeSlice.reducer
