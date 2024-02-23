<template>
   <Header />
   <marquee behavior="smooth" direction="ltr">
     Pinia store project***<span class="span">visit the site below to get more information about this project </span>*** have fun!
   </marquee>
   <FormTask />
  <div class="container">
      <div class="btn-cont">
          <button 
             @click="count = 'all'"
             class="btn-1" 
             >
             all tasks
            </button>
          <button 
            @click="count = 'fav'"
            class="btn-2"
            >
            fav tasks
          </button>
      </div>
      <!-- loading task -->
       <div class="loading" v-if="loading">
         loading tasks...
       </div>
      <!-- closed -->

      <div v-if="count === 'all'">
          <p>you have {{ totalCount }} tasks left to do... </p>
        <div v-for=" task in tasks" :key="task">
          <Task :task="task"/>
        </div>
      </div>

      <div v-if="count === 'fav'">
        <p>you have {{ favCount }} tasks left to do...</p>
        <div v-for=" task in myFav" :key="task">
          <Task :task="task"/>
        </div>
      </div>
      <!-- reset button -->
       <div class="reset" @click="data.$reset">reset page</div>
      <!-- closed -->

      <!-- img -->
       <div>
          <myImg />
       </div>
      <!-- closed -->
      <!-- info -->
       <div class="container">
          <Info />
       </div>
      <!-- closed -->
  </div>
  <Footer />

</template>

<script>
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useTaskStore } from '@/store/Task.js';
  import Header from './components/Header.vue';
  import Task from './components/Task.vue';
  import FormTask from './components/TaskForm.vue';
  import Footer from './components/Footer.vue';
  import myImg from './components/myImg.vue';
  import Info from './components/Info.vue'
  export default {
     components: { Header, Task, FormTask, Footer, myImg, Info },
     setup() {
       const data = useTaskStore();
        const { myFav, favCount, totalCount, loading, tasks} = storeToRefs(data)
       data.getTasks()

       const count = ref('all');
       const active = ref('inActive');

       return { data, count, myFav, totalCount, loading, favCount, tasks }
     }
  }
</script>

<style scoped>
 p{
  padding: 10px;
  margin-top: 1rem;
  text-align: center;
 }

 .reset{
    background-color: green;
    padding: 14px 10px;
    width: 150px;
    font-size: 18px;
    margin: 3rem auto;
    box-shadow: 1px 1px 2px gray;
    text-transform: capitalize;
    font-weight: 700;
    cursor: pointer;
    color: white;
    text-align: center;
    border-radius: 6px;
 }

  marquee{
    padding: 5px;
    background-color: yellow;
    font-weight: 700;
  }

  .span{
    color: red;
  }

  .container{
    padding: 0 5pxp;
  }
</style>

