<!--
 * @Descripttion: file content
 * @version: 
 * @Author: sunqiangqiang
 * @Date: 2020-06-22 08:57:03
 * @LastEditors: sunqiangqiang
 * @LastEditTime: 2020-07-03 08:24:11
--> 
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/rowTable" tag="p"> 
      Vxe-Table
    </router-link>
    <router-link to="/ParentNode" tag="button"> 
      跳转到父子传参页面
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
button{
  width: 300px;
  line-height: 50px;
  background: #bfbfbf;
  color: #fff;
  text-align: center;
}

</style>
