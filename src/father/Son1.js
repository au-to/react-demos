function Son1 ({count,onClick}) {
  return (
    <div className="son1">
      <h4>我是子组件1</h4>
      <button onClick={onClick}>{ count }</button>
    </div>
  )
}

export default Son1