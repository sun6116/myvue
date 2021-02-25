<!--
 * @Descripttion: file content
 * @version: 
 * @Author: sunqiangqiang
 * @Date: 2020-06-30 08:49:18
 * @LastEditors: sunqiangqiang
 * @LastEditTime: 2021-02-24 17:24:13
--> 
<!-- 子组件 -->
<template>
  <div class="child">
    <h2>{{ msg }}</h2>
    <h4>问题：{{ $route.params.idvv }}</h4>
    <div>{{ questionInfo }}</div>
    <button @click="handleClick" v-show="flag">下一个问题</button>
    <input type="text" v-model="forMsg" />
    <p>{{ forMsg }}</p>
    <p>childMsg：{{ childMsg }}</p>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  beforeRouteUpdate(to, from, next) {
    console.log(to);
    this.getData(to.params.idvv);
    next();
  },
  data() {
    //这里存放数据
    return {
      msg: "这是子节点",
      list: [
        { id: 1, name: "张三", sex: "男", age: 23 },
        { id: 2, name: "张三1", sex: "男2", age: 13 },
        { id: 3, name: "张三2", sex: "男3", age: 33 },
        { id: 4, name: "张三3", sex: "男4", age: 43 },
        { id: 5, name: "张三4", sex: "男5", age: 3 },
      ],
      questionInfo: "",
      childMsg: this.forMsg,
      curId: "",
      flag: true,
      question: [
        { id: 1, title: "今天吃什么？" },
        { id: 2, title: "好吃吗？" },
        { id: 3, title: "待会打游戏？" },
      ],
    };
  },
  props: ["for-msg"],
  //监听属性 类似于data概念
  /* computed: {
    childMsg() {
      return this.forMsg + "---childMsg";
    },
  }, */
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleClick() {
      this.$router.push({
        name: "ChildNode",
        params: {
          idvv: this.curId + 1,
        },
      });
    },
    getData(id) {
      const index = this.question.findIndex((item) => item.id === id);
      if (index == -1) {
        this.flag = false;
      } else {
        this.questionInfo = this.question[index].title;
        this.curId = id;
        this.flag = true;
      }
    },
  },
  watch: {
    forMsg() {
      this.childMsg = this.forMsg;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getData(this.$route.params.idvv);
  },
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
</style>