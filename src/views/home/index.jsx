import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'



const Home = memo(() => {

  // 从redux中获取数据, 浅拷贝
  const { goodPriceInfo } = useSelector((state)=>({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual) 

  // 从redux中获取dispatch函数
  const dispatch = useDispatch()
  useEffect(() => {
    // 派发dispatch的目的是为了触发 Redux store 中的状态更新，这里由 createAsyncThunk 异步函数触发后更新redux store中的状态，redyx中就拿到请求的数据了
    dispatch(fetchHomeDataAction("获取homedata"))
  }, [dispatch])


  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <SectionHeader title={goodPriceInfo.title}/>
        <ul>
          {
            goodPriceInfo?.list?.map(item => {
              return <li key={item.id}>{item.name}</li>
            })
          }
        </ul>
      </div>
    </HomeWrapper>
  )
})

export default Home
