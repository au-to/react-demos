
import { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "./store/counterStore"
import { useImmer } from "use-immer"
import Father from "./components/component-communication"
import Context from './components/component-communication/context'
import AppRoutes from "./router"
import useConter from "./hooks/useCounter"

function App () {
  /**
 * 纯函数，对于相同的输入，react组件总是返回相同的jsx
 */

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

  /**
   *  定义组件
   */
  const ComponentA = () => {
    return <input type="text" />
  }

  /**
   *  样式控制，定义内敛样式
   */
  const spanStyle = {
    color: 'red',
    fontSize: '30px'
  }

  // 模拟异步请求
  const simulateFetch = function () {
    setTimeout(() => {
      console.log('这是一个模拟的异步请求');
    }, 1000);
  }

  /**
   * 使用store
   */
  const dispatch = useDispatch();
  const storeCounter = useSelector(state => state.counter.count)

  /**
   * 使用useEffect触发异步请求
   */
  useEffect(() => {
    simulateFetch()
  })

  /**
   * 使用useState修改状态常量
   */
  const [number, setNumber] = useState(0);
  const addNumber = () => {
    setNumber(number + 1)
  }

  /**
   * 使用useState修改状态对象
   */
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

  /**
   * 表单双向绑定
   */
  const [value, setValue] = useState(123)

  /**
   * 获取dom元素
   */
  const eleRef = useRef(null)
  const showDom = () => {
    const dom = eleRef.current
    console.log(dom, '----dom----');
  }

  /**
   * 阻止事件冒泡
   */
  const handleDefaultClick = () => {
    console.log('阻止事件冒泡');
  }

  /**
   * 事件捕获
   */
  const handleCapture = () => {
    console.log('事件捕获');
  }

  /**
   * 更新state中的对象
   */
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })
  function getPosition (e) {
    setPosition({
      ...position,
      x: e.clientX,
      y: e.clientY
    })
  }

  /**
   * 更新state中的数组
   */
  const [examArr, updateExamArr] = useImmer([{ name: 'zhao', id: 0 }, { name: 'hou', id: 1 }]);
  function handleUpdateArr () {
    updateExamArr((draft) => {
      const ele = draft.find(e => e.name === 'zhao')
      ele.name = 'wang'
    })
  }

  /**
   * 使用自定义hook
   */
  const { hookCount, hookIncrement, hookDecrement } = useConter(0, 10);

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
      <ComponentA></ComponentA><br />

      {/* 修改状态常量 */}
      <button onClick={addNumber}>{number}</button>

      {/* 修改状态对象 */}
      <div>{obj.name}----{obj.age}</div>
      <div>
        <button onClick={changeObj}>修改状态对象</button>
      </div>

      {/* 内敛样式 */}
      <div style={spanStyle}>行内样式</div>

      {/* 定义类名 */}
      <div className="foo">定义类名</div>

      {/* 表单双向绑定 */}
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />

      {/* 获取dom元素 */}
      <p ref={eleRef}>我是p标签</p>
      <button onClick={showDom}>获取dom元素</button>

      {/* 组件传参 */}
      <Father></Father>

      {/* 阻止事件冒泡 */}
      <button onClick={(e) => { e.stopPropagation(); handleDefaultClick() }}>阻止事件冒泡</button>

      {/* 事件捕获 */}
      <button onClickCapture={handleCapture}>事件捕获</button>

      {/* 更新state中的对象 */}
      <p onClick={e => getPosition(e)}>{position.x},{position.y}</p>

      {/* 更新state中的数组 */}
      <p>更新数组元素：{examArr.map(item => <li key={item.id}>{item.name}</li>)}</p>
      <button onClick={handleUpdateArr}>更新数组元素</button>
      <h3>store的使用</h3>
      <h4>我是store中的count：{storeCounter}</h4>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      {/* context跨组件通信 */}
      <Context></Context>

      {/* 使用自定义hook */}
      <div>
        {hookCount}
        <button onClick={hookIncrement}>加</button>
        <button onClick={hookDecrement}>减</button>
      </div>

      {/* 路由组件 */}
      <AppRoutes></AppRoutes>
    </div>
  )
}

export default App;
