<!--
 * @Descripttion: file content
 * @version: 
 * @Author: sunqiangqiang
 * @Date: 2020-06-30 08:50:41
 * @LastEditors: sunqiangqiang
 * @LastEditTime: 2021-02-24 16:25:03
--> 
<!-- 父节点 -->
<template>
  <div class="parent">
    <vxe-button type="text" status="primary" @click="$router.back(-1)"
      >返回</vxe-button
    >
    <h2>{{ msg }}</h2>
    <input type="text" v-model="forMsg">
    <ChildNode :for-msg="forMsg" />
    <ul v-for="item in question" :key="item.id">
      <router-link :to="{name:'ChildNode',params:{idvv:item.id}}" tag="li">{{item.info}}</router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ChildNode from "./ChildNode.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    ChildNode,
  },
  data() {
    //这里存放数据
    return {
      msg: "这是父节点",
      forMsg: "三二二",
      question: [
        {
          id: 1,
          info: "About question1",
        },
        {
          id: 2,
          info: "About question2",
        },
        {
          id: 3,
          info: "About question3",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
li {
  cursor: pointer;
  color: aquamarine;
}
</style>