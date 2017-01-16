<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="detail">Go to detail</router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'test msg',

    }
  }
}

</script>

<style>

</style>
