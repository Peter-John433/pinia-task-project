import { defineStore } from "pinia";

export const useTaskStore = defineStore('task', {
    state: () =>({
        tasks:[
           {
                id: 1,
                title: 'world of horror',
                isFav: true
           },
           {
                id: 2,
                title: 'King of the west',
                isFav: false
           },
           {
                id: 3,
                title: 'god of war',
                isFav: true
           }
        ],
    }),

    getters:{
        myFav() {
            return this.tasks.filter(t => t.isFav)
        }
    }
})