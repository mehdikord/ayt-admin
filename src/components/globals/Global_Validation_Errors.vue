<script>
export default {
  name: "Global_Validation_Errors",
  props:['errors','classes']
}
</script>

<template>
  <div v-if="errors" class="q-mb-sm text-red" v-for="(error,index) in errors" :key="index" :class="classes">
    {{error}}
  </div>

</template>

<style scoped>

</style>