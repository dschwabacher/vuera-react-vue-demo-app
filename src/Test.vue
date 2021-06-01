<template>
  <div>
    <button @click="clickMe()">This Vue button has been clicked: {{ count }} times</button>
  </div>
</template>
<script>
  export default {
    name: 'Testing',
    methods: {
      clickMe() {
        this.count += 1
      }
    },
    data() {
      return {
        count: 0
      }
    }
  }
</script>