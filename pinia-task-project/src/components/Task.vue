<template>
    <div>
        <div class="container task">
           <div class="title">{{ task.title }}</div>
            <div class="icons">
                <i 
                   @click="taskData.deleteTask(task.id)"
                   class='bx bx-trash'
                   ></i>

                <i 
                   :class="{ active: task.isFav }"
                   class='bx bxs-heart' 
                   @click="taskData.toggleTask(task.id)"
                ></i>
           </div>
        </div>
    </div>
</template>

<script>
  import { useTaskStore } from '@/store/Task';
    export default {
        props: ['task'],
        setup(){
            const taskData = useTaskStore();


            return { taskData }
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

   i{
    font-size: 2rem;
    cursor: pointer;
    color: gray;
   }

    i.active{
        color: red;
    }
</style>