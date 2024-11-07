
import { Navigate } from "react-router-dom"

import Login from "../views/login"
import Layout from "../layout"
import Chart from "../views/chart"

import Part1 from "../views/menu1/part1"
import Part2 from "../views/menu1/part2"

const routes = [
  {
    path: '/',
    title: '登录',
    element: <Login />
  },
  {
    path: '/home',
    element: <Navigate to="/home/chart" />,
  },
  {
    path: '/home',
    title: '首页',
    element: <Layout />,
    children: [
      {
        path: 'chart',
        title: '图表',
        element: <Chart />
      },
      {
        path: 'menu1',
        title: '菜单1',
        children: [
          {
            path: 'part1',
            title: '部分1',
            element: <Part1 />
          },
          {
            path: 'part2',
            title: '部分2',
            element: <Part2 />
          },
        ]
      }
    ]
  }
]

export default routes