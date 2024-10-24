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

