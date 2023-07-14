<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text"
            placeholder="Tasks to do..." 
            v-model="newTask"
       
       />
       <button>Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore';

export default {

    setup(){
        const taskStore = useTaskStore()

        const newTask = ref('')

        const handleSubmit = ()=>{
            if (newTask.value.length > 0) {
                taskStore.addTask({
                    title: newTask.value,
                    isFun: false,
                    id: Math.floor(Math.random() * 1000)
                })

                newTask.value = ''

            } 
        }

        return {handleSubmit, newTask}

    }
   



};
</script>
