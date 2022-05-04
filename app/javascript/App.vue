<script setup lang="ts">
function handleChange(event: Event) {
  // `event` implicitly has `any` type
   console.log((event.target as HTMLInputElement).value)
}
</script>

<template>
  <input type="text" @change="handleChange" />
</template>