function Son2 ({ count, onClick }) {
  return (
    <div className="son2">
      <h4>我是子组件2</h4>
      <button onClick={onClick}>{count}</button>
    </div>
  )
}

export default Son2