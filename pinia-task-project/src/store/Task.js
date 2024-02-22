import { defineStore } from "pinia";

export const useTaskStore = defineStore('task', {
    state: () =>({
        tasks:[],
        loading: false
    }),

    getters:{
        myFav() {
            return this.tasks.filter(t => t.isFav)
        },

        favCount() {
            return this.tasks.reduce( (a, b) =>{
                return b.isFav ? a + 1 : a
            }, 0)
        },

        totalCount: (state) => {
            return state.tasks.length
        }
    },
    actions: {
        async getTasks(){
             this.loading = true
            const response = await fetch('http://localhost:3000/tasks');
            const data = await response.json();

            this.tasks  = data
            this.loading = false
        },

        async addTask(task) {
            this.tasks.push(task);

            const response = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                header: {'Content-type' : 'application/json'}
            });
            
            if(response.error) {
                console.log(response.error)
            }
        },

        async deleteTask(id){
           this.tasks = this.tasks.filter( t => { 
                return t.id !== id
             })

             const response = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'DELETE'
             })

             if(response.error) {
                console.log(response.error)
             }
        },

        async toggleTask(id) {
         const task =  this.tasks.find(t => t.id === id);
          task.isFav = !task.isFav;

          const response = await fetch('http://localhost:3000/tasks/' + id, {
             method: "PATCH",
             body: JSON.stringify({isFav: task.isFav}),
             header: { 'Content-type' : 'application/json' }
          })

          if(response.error) {
            console.log(response.error)
          }
        }
    }
})