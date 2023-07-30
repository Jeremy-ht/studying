<template>
  <div class="wrapper">
    <TodoList/>
    <TodoInput/>
  </div>
</template>

<script lang="ts">
import TodoList from './components/TodoList/index.vue'
import TodoInput from './components/TodoInput/index.vue'
import {defineComponent} from "vue"

export default defineComponent({
  name: 'App',
  components: {
    TodoList, TodoInput
  }
});
</script>
