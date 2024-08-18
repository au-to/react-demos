import { Link } from "react-router-dom";

function About () {
  return (
    <div>
      <h3>这是关于页面</h3>
      <Link to="/login">去登录页</Link>
    </div>
  )
}

export default About;