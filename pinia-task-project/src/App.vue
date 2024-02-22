<template>
  <div>
      <Header />
      
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

      <div v-if="count === 'all'">
          <p>All tasks</p>
        <div v-for=" task in data.tasks" :key="task">
          <Task :task="task"/>
        </div>
      </div>

      <div v-if="count === 'fav'">
        <p>Favorite tasks</p>
        <div v-for=" task in data.myFav" :key="task">
          <Task :task="task"/>
        </div>
      </div>

  </div>
</template>

<script>
  import { ref } from 'vue';
  import { useTaskStore } from '@/store/Task.js'
  import Header from './components/Header.vue';
  import Task from './components/Task.vue'
  export default {
     components: { Header, Task },
     setup() {
       const data = useTaskStore()

       const count = ref('all');

       return { data, count}
     }
  }
</script>

<style scoped>
 p{
  padding: 10px;
  margin-top: 1rem;
 }
</style>

