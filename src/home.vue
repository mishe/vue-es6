<template>
  <div>
    <h1 v-tap="{methods:msgg}">{{ msg }}</h1>
    <router-link to="detail">Go to detail</router-link>
  </div>
</template>
<script>
export default {
    created (){
        this.getData()
    },
    data () {
        return {
          msg: 'test msg',

        }
    },
    methods:{
        msgg(){
            console.log('msg')
        },
        getData(){


            sync({
                url:'newProductList',
                type:'POST',
                data:{
                    currentPage:0,
                    pageCount:15,
                    productType:4,
                    channelCode:''
                },
                success(d){
                    console.log(d);
                },
                error(d){
                    console.log(d);
                }
            })
        }
    }
}

</script>

<style>

</style>
