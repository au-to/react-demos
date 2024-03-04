import { useState } from "react"
import './index.css'
import Comment from './comment/index'

const isLogin = true
const articleType = 0
const count = 100;

// 定义列表
const list = [
  { id: 1, name: 'vue' },
  { id: 2, name: 'angular' },
  { id: 3, name: 'react' }
]

// 获取姓名
function getName () {
  return 'zhaohubiao'
}

// 获取文章模板
function getArticleTemplate () {
  if (articleType === 0) {
    return <div>无图模式</div>
  } else if (articleType === 1) {
    return <div>单图模式</div>
  } else {
    return <div>三图模式</div>
  }
}

// 点击事件回调
const handleClick = (name, e) => {
  console.log("🚀 ~ handleClick ~ e:", e)
  console.log("🚀 ~ handleClick ~ name:", name)
}

// 定义组件
const Component = () => {
  return <input type="text" />
}

// 样式控制
// 定义内敛样式
const spanStyle = {
  color: 'red',
  fontSize: '30px'
}

function App () {
  // 使用useState修改状态常量
  const [number, setNumber] = useState(0);
  const addNumber = () => {
    setNumber(number + 1)
  }

  // 使用useState修改状态对象
  const [obj, setObj] = useState({
    name: 'zhaohubiao',
    age: 18
  })
  const changeObj = () => {
    setObj({
      obj,
      name: 'hubiao',
      age: 23
    })
  }

  // 表单双向绑定
  const [value, setValue] = useState(123)
  return (
    <div className="App">
      {/* 使用引号传递字符串 */}
      <span>{'this is a string'}</span><br />
      {/* 识别js变量 */}
      <span>{count}</span><br />
      {/* 函数调用 */}
      <span>{getName()}</span><br />
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 使用js对象 */}
      <div style={{ color: 'red' }}>this is div</div>
      {/* 列表渲染 */}
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      {/* 条件渲染 */}
      {isLogin && <p>与运算符</p>}
      {isLogin ? <p>三元表达式</p> : <p>loading...</p>}
      {/* 复杂条件渲染 */}
      {getArticleTemplate()}
      {/* 事件绑定 */}
      <button onClick={(e) => handleClick('hubiao', e)}>事件绑定</button><br />
      {/* 使用组件 */}
      <Component></Component><br />
      {/* 修改状态常量 */}
      <button onClick={addNumber}>{number}</button>
      {/* 修改状态对象 */}
      <div>{obj.name}----{obj.age}</div>
      <div>
        <button onClick={changeObj}>修改状态对象</button>
      </div>
      <div style={spanStyle}>行内样式</div>
      <div className="foo">定义类名</div>
      <Comment></Comment>
      {/* 表单双向绑定 */}
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  )
}

export default App;