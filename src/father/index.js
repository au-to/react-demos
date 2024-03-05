import Son1 from "./Son1"
import Son2 from "./Son2"
import { useState } from "react"

function Father () {
  // 在父组件中定义count
  const [count, setCount] = useState(0)

  // 改变count的事件处理函数
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div className="father">
      <h3>我是外层父组件</h3>
      <button onClick={handleClick}>{count}</button>
      {/* 向子组件传递count和事件处理函数 */}
      <Son1 count={count} onClick={handleClick}></Son1>
      <Son2 count={count} onClick={handleClick}></Son2>
    </div>
  )
}

export default Father