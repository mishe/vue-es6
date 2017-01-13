<template>
  <div>
    <h1>{{ msg }} 1112312312</h1>
    <h2>Essential Links</h2>
    <ul>
        <li v-for="n in item">{{n.name}} --- {{n.age}}</li>
    </ul>
    <router-link to="home">Go to home</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'detail',
      item:[{name:'aa',age:22},{name:'bb',age:33},{name:'cc'}]

    }
  }
}
</script>

<style>

</style>
