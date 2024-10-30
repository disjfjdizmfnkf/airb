import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { NotEmptyO } from "@/utils/is-empty-object";
import HomeLongfor from "./c-cpns/home-longfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Home = memo(() => {
  // 从redux中获取数据, 使用浅比较优化性能
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );
  // 从redux中获取dispatch函数
  const dispatch = useDispatch();
  useEffect(() => {
    // 派发dispatch的目的是为了触发 Redux store 中的状态更新，这里由 createAsyncThunk 异步函数触发后更新redux store中的状态，redyx中就拿到请求的数据了
    dispatch(fetchHomeDataAction());
    // 头部导航栏
    dispatch(changeHeaderConfigAction({isFix: true, topAlpha: true}))
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {NotEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {NotEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {NotEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} />}
        {NotEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {NotEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {NotEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}/>}
      </div>
    </HomeWrapper>
  );
});

export default Home;
