<template>
    <b-button squared variant="dark" @click="clickMe()">This button has been clicked: {{ count }} times</b-button>
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