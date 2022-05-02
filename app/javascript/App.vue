<script setup lang="ts">
import { ref } from 'vue'
const year = ref(2020)
year.value = 2022
</script>

<template>
  <div>
    {{ year }}
    <BButton variant="primary">Test</BButton>
  </div>
</template>