<template>
    <div>
        <div class="container task">
           <div class="title">{{ task.title }}</div>
           <div class="icons">
               <box-icon name='trash' size="md"></box-icon>
               <box-icon name='heart' type='solid' size="md"></box-icon>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['task'],
        setup(){

        }
    }
</script>

<style  scoped>
    .title{
        font-size: 1.3rem;
        font-weight: bold;
    }

   .icons{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
   }
</style>