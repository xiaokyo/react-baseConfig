import loadable from "react-loadable";

// 引入组件页面
import Loading from "@components/loading";

export const loadComponent = func => {
  return loadable({
    loader: func,
    loading: Loading,
    timeout: 10000 // 10 seconds
  });
};
