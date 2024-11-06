import { Button } from "antd";
import { useNavigate } from 'react-router-dom'

export default function Page() {
  const navigate = useNavigate()

  const login = () => {
    navigate('/home')
  }

  return <div>
    <Button onClick={login}>登录</Button>
  </div>
}