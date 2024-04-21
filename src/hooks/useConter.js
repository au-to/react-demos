/* 计数器自定义hook实现 */

import { useState } from "react";

function useConter (initalValue, step) {
  const [hookCount, setHookCount] = useState(initalValue);
  const hookIncrement = () => {
    setHookCount(preCunt => preCunt + step);
  }

  const hookDecrement = () => {
    setHookCount(preCunt => preCunt - step);
  }

  return { hookCount, hookIncrement, hookDecrement };
}

export default useConter