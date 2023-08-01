<template>
  <div>
    <h1>A ball 2</h1>
  </div>
</template>


<script setup lang="ts">
const { data, pending, error, refresh } = await useAsyncData(
  'mountains',
  () => $fetch('https://api.nuxtjs.dev/mountains')
)
</script>