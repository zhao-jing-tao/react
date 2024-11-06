import { Layout, Menu } from "antd"
import { Outlet, useNavigate } from "react-router-dom"
import './index.css'
import routes from "../router"

const { Header, Sider, Content } = Layout

const getMenuList = (routesList) => {
  let list = []
  routesList.forEach((item) => {
    if (item.children) {
      item.children.forEach((i) => {
        if (i.children) {
          let c = {
            label: i.title,
            key: item.path + '/' + i.path,
            children: [],
          }
          i.children.forEach((t) => {
            c.children.push({
              label: t.title,
              key: item.path + '/' + i.path + '/' + t.path,
            })
          })
          list.push(c)
        } else {
          let v = { label: i.title, key: item.path + '/' + i.path }
          list.push(v)
        }
      })
    }
  })
  return list
}

export default function Page() {
  const navigate = useNavigate()
  let menus = getMenuList(routes)

  console.log(routes)



  return <Layout className="home-layout">
    <Header>头</Header>
    <Layout>
      <Sider theme="light">
        <Menu
          mode="inline"
          theme="dark"
          items={menus}
          style={{ height: "100%", borderRight: 0 }}
          onClick={((val) => {
            navigate(val.key)
          })}
        />
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  </Layout>
}