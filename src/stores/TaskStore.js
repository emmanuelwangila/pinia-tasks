import {defineStore} from 'pinia'

export const useTaskStore= defineStore('taskStore', {
    state: () => ({
        tasks: [],
        loading: false,
       
        
    }),
    getters:{
        fun(){
            return this.tasks.filter(t => t.isFun)
        },
        funCount(){
            return this.tasks.reduce((p, c) => {
                return c.isFun ? p + 1: p

            }, 0)
        },
        totalCount: (state)=> {
            return state.tasks.length

        },
    },

    actions:{
        async getTasks(){
            this.loading = true 

            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()

            this.tasks = data
            this.loading= false
        },


        addTask(task){
            this.tasks.push(task)

        },

        delete(id){
            this.tasks = this.tasks.filter(t => {
                return t.id != id
            })
        },

        toggleFun(id){
            const task = this.tasks.find( t => t.id === id)
            task.isFun = !task.isFun

        }

    }

    
})