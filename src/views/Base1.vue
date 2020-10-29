<template>
  <div class="base">
    <!-- Step1: DOM element -->
    <h1 class="base__title">{{ title }}</h1>
    <div class="base__ball" ref="ball"></div>
    <button @click="onClick" class="base__action">RUN</button>
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
  ref,
} from 'vue'
import { useRoute } from 'vue-router'
import * as steps from '@/composables/steps'

export default defineComponent({
  name: 'Base',
  setup() {
    // Single DOM/SVG element
    const ball = ref()

    // Get ID param from current route
    const route = useRoute()
    const id = parseInt(route.params.id, 10) // Use it as an integer
    const currentStep = steps[`step${id}`] // Get current step module prop/method
    const { title, run } = currentStep

    const onClick = () => {
      run(ball.value, true)
    }

    // Lifecycle hooks
    // console.log('base:setup', ball.value) // No refs here

    // onBeforeMount(() => {
    //   console.log('base:onBeforeMount', ball.value) // No refs here
    // })
    // onMounted(() => {
    //   console.log('base:onMounted', ball.value) // DOM injected === refs available!!!
    // })
    // onBeforeUpdate(() => {
    //   console.log('base:onBeforeUpdate')
    // })
    // onUpdated(() => {
    //   console.log('base:onUpdated')
    // })
    // onBeforeUnmount(() => {
    //   console.log('base:onBeforeUnmount')
    // })
    // onUnmounted(() => {
    //   console.log('base:onUnmounted')
    // })

    return { ball, route, id, title, onClick }
  },
})
</script>

<style lang="scss">
$d: 10vw;

.base {
  position: relative;
}

.base__title {
  margin-bottom: $d * 2;
}

.base__ball {
  width: $d;
  height: $d;
  margin-left: $d * 2;
  background: $c-primary;
  border-radius: 50%;
}

.base__action {
  position: absolute;
  top: 4rem;
  right: 4rem;
  padding: 1em 2em;
  color: $c-primary;
  font-weight: 700;
  background-color: $c-secondary;
  border: 1px solid $c-primary;
  cursor: pointer;
  transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;

  &:hover {
    color: $c-white;
    background-color: $c-primary;
  }
}
</style>
