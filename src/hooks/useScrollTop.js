import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * 自定义 Hook, 监听路径改变滚动到顶部
 * 
 * 自定义hook要用
 * @example
 * useScrollTop()
 */
export default function useScrollTop() {
  // 返回当前位置对象(浏览器中的URL)
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
}
