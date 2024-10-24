import hyRequest from "..";

// 在这里封装一些网络请求函数，之后在redux中使用

export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData() {
  return hyRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return hyRequest.get({
    url: "/home/discount",
  })
}

export function getHomeHotRecommendData() {
  return hyRequest.get({
    url: "/home/hotrecommenddest"
  })
}
