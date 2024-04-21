/* 适用于跨组件通信 */

import { createContext, useContext } from 'react'

// 创建context对象
const MyContext = createContext();

function A () {
  return (
    // 提供值
    <MyContext.Provider value={ 'A组件的值' }>
      <div>
        <h3>我是A组件</h3>
        <B></B>
      </div>
    </MyContext.Provider>
  )
}

function B () {
  return (
    <div>
      <h4>我是B组件</h4>
      <C></C>
    </div>
  )
}

function C () {
  // 使用值
  const contextMsg = useContext(MyContext)
  return (
    <div>
      <h5>我是C组件</h5>
      <p>{ contextMsg }</p>
    </div>
  )
}

export default A