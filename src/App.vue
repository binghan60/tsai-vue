<script>
import NavNarComponent from '@/components/NavNarComponent.vue'

import { RouterView } from 'vue-router'
export default {
  components: { RouterView, NavNarComponent },
}
</script>

<template>
  <NavNarComponent></NavNarComponent>
  <RouterView />
</template>
