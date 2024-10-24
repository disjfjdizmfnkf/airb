import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./c-cpns/home-banner";
import SectionHeader from "@/components/section-header";
import SectionRomms from "@/components/section-rooms";
import HomeSectionV1 from "./c-cpns/home-section-v1";

const Home = memo(() => {
  // 从redux中获取数据, 浅拷贝
  const { goodPriceInfo, highScoreInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
    }),
    shallowEqual
  );

  // 从redux中获取dispatch函数
  const dispatch = useDispatch();
  useEffect(() => {
    // 派发dispatch的目的是为了触发 Redux store 中的状态更新，这里由 createAsyncThunk 异步函数触发后更新redux store中的状态，redyx中就拿到请求的数据了
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <HomeSectionV1 infoData={goodPriceInfo}/>
        <HomeSectionV1 infoData={highScoreInfo}/>
      </div>
    </HomeWrapper>
  );
});

export default Home;
