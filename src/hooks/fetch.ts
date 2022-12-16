import { useState, useEffect, useContext } from 'react';
import useFetchConfigContext from './fetchGlobalConfig';

function useFetch(url: string, fetcher: any, options = {}) {
  const [data] = useState(undefined);
  const [isLoading] = useState(false);
  const [isError] = useState(false);

  // 通过 useContext 获取 useFetchConfigContext 的全局配置
  //   debugger;
  const config: any = Object.assign({}, useContext(useFetchConfigContext), options);

  let fn = fetcher;
  if (typeof fn === 'undefined') {
    // 使用全局配置的 fetcher
    fn = config.fetcher;
  }

  useEffect(() => {
    fn();
  }, [url]);

  return [data, isLoading, isError];
}

// 导出 useFetchConfig
const useFetchConfig = useFetchConfigContext.Provider;
export { useFetchConfig };

export default useFetch;
