/*
 * @Descripttion: file content
 * @version: 
 * @Author: sunqiangqiang
 * @Date: 2020-06-22 08:57:03
 * @LastEditors: sunqiangqiang
 * @LastEditTime: 2020-07-02 09:11:18
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const RowTable = () => import('@/components/table/RowTable')
const ParentNode = () => import('@/components/props/ParentNode')
const ChildNode = () => import('@/components/props/ChildNode')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/rowTable',
      meta: {
        title: "首页"
      },
      name: 'RowTable',
      component: RowTable,
    },
    {
      path: '/ParentNode',
      name: 'ParentNode',
      component: ParentNode,
      children: [
        {
          path: '/ChildNode/:idvv',
          name: 'ChildNode',
          component: ChildNode
        }
      ]
    }
  ],
})
