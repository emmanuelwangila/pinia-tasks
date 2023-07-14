<template>
  <main>
      <!-- Heading  -->
      <header>
          <img src="./assets/favicon.ico" alt="movie tag"/>
          <h1>Tasks App</h1>
          <title>PInnia</title>
      </header>

      <!-- new task form -->
      <div class="new-tasks-form">
        <TaskForm/>
      </div>

      <!-- filter button -->

      <nav class="filter">
        <button @click="filter='all'"> All tasks </button>
        <button @click="filter='fun'"> fun tasks </button>
      </nav>

      <!-- loading tasks -->

      <!-- <div class="loading" v-if="taskStore.loading">
        loading tasks......

      </div> -->


      <!-- task list -->
      
      <div class="task-list" v-if="filter === 'all'">
        <p>You have {{ taskStore.totalCount }} tasks remaining to do</p>
        <div v-for="task in taskStore.tasks">
           <TaskDetails :task="task"/>


        </div>
      </div>
        
      <div class="task-list" v-if="filter === 'fun'">
        <p> You have {{ taskStore.funCount }} fun tasks remaining to do</p>
        <div v-for="task in taskStore.fun">
           <TaskDetails :task="task"/>


        </div>
      </div>

  </main>
</template>

<script>

import { ref } from 'vue';
import TaskForm from './components/TaskForm.vue';
import TaskDetails from './components/TaskDetails.vue';
import  { useTaskStore } from './stores/TaskStore';




  export default {

    components:{ TaskDetails, TaskForm },


    setup() {
      const taskStore = useTaskStore()

      // fetch tasks 

      taskStore.getTasks()

      const filter=ref('all')

      return { taskStore, filter}

    }
    
  }
</script>