<template>
  <div class="app">
    <ChromeNav />
    <!-- Unique key allows Vue.js to reuse/refresh the same component when the key has changed -->
    <router-view class="app__main" :key="route.fullPath" />
  </div>
</template>

<script>
import {
  defineComponent,
  // Lifecycle hooks
  // onBeforeMount,
  // onMounted,
  // onBeforeUpdate,
  // onUpdated,
  // onBeforeUnmount,
  // onUnmounted,
} from 'vue'
import { useRoute } from 'vue-router'
import ChromeNav from '@/components/chrome/Nav.vue'

export default defineComponent({
  components: {
    ChromeNav,
  },
  setup() {
    const route = useRoute()

    // Lifecycle hooks
    // console.log('app:setup')

    // onBeforeMount(() => {
    //   console.log('app:onBeforeMount')
    // })
    // onMounted(() => {
    //   console.log('app:onMounted')
    // })
    // onBeforeUpdate(() => {
    //   console.log('app:onBeforeUpdate')
    // })
    // onUpdated(() => {
    //   console.log('app:onUpdated')
    // })
    // onBeforeUnmount(() => {
    //   console.log('app:onBeforeUnmount')
    // })
    // onUnmounted(() => {
    //   console.log('app:onUnmounted')
    // })

    return { route }
  },
})
</script>

<style lang="scss">
body {
  margin: 0;
}

.app {
  display: flex;
  flex-direction: column-reverse;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app__main {
  flex-grow: 1;
  padding: 5rem;
}
</style>
erve
