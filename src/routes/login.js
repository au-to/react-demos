import { useNavigate } from "react-router-dom";

function Login () {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/about')
  }
  return (
    <div>
      <h3>这是登录页面</h3>
      <button onClick={handleClick}>去关于页</button>
    </div>
  )
}

export default Login;