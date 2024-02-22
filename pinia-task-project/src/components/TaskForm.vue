<template>
    <div class="container">
        <div>
          <form @submit.prevent="handleSubmit">
            <input 
              @keydown="validateForm($event)"
              type="text"
              placeholder="add new task"
              v-model="newTask"
              name="newtask"
              value="newtask"
           >
           <button
             @click="handleSubmit"
            
           >
           <!-- :disabled="isBtnDisable" -->
              Add
            </button>

          </form>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import { useTaskStore } from '@/store/Task';

    export default {
        setup() {
            const isBtnDisable = ref(false);

            const task = useTaskStore();

            const inputField = ref('');

            const newTask = ref('');

            const validateForm = (e) =>{
                const {name, value} = e.target
                if(e.target.attributes.required && value.trim() == '' ){
                    e.target.style.borderColor = 'red';
                }else{
                    e.target.style.borderColor = 'gray'
                }

                //  if(inputField.value === ''){
                //    isBtnDisable.value = true;
                //  }
                //  else{
                //   isBtnDisable.value = false;
                //  }
           }

            const handleSubmit = () =>{
                if(newTask.value.length > 0){
                    task.addTask({
                        title: newTask.value,
                        isFav: false,
                        id: Math.floor( Math.random() * 10000 )
                    })
                }

                newTask.value = '';
             }

          return{
            validateForm, 
            isBtnDisable, 
            inputField, 
            handleSubmit, 
            newTask,
            task
          }
        }
    }
</script>

<style scoped>
 /* :disabled{
    cursor: not-allowed;
    opacity: 0.5;
 } */
</style>