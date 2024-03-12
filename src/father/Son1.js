function Son1 ({count,onClick}) {
  return (
    <div className="son1">
      <h4>我是子组件1</h4>
      <button onClick={onClick}>{ count }</button>
    </div>
  )
}

export default Son1

// 也可以通过props属性接受父组件传递下来的参数
function Example (props) {
  return (
    <div className="example">
      <Son1 {...props}></Son1>
    </div>
  )
}