<template>
    <div class="task">
        <h3> {{ task.title }} </h3>
        <div class="icons">
            <i @click="taskStore.delete(task.id)" class="material-icons">delete</i>
            <i  @click="taskStore.toggleFun(task.id)"
                    :class="{active: task.isFun}"
            
            class="material-icons">add</i>
        </div>

    </div>
</template>

<script>

import { useTaskStore } from '../stores/TaskStore';
    export default {
        props:['task'],

        setup (){
            const taskStore = useTaskStore()

            return { taskStore }
        },








        
        
    }
</script>