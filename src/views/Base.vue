<template>
  <div class="base">
    <!-- Step9+: DOM + SVG + Multiple elements -->
    <!-- Step14: titleRef -->
    <h1 ref="titleRef" class="base__title">{{ title }}</h1>
    <!-- step2 === SVG -->
    <svg
      v-if="id === 2"
      class="base__ball-outer"
      viewBox="0 0 800 400"
      width="680"
    >
      <circle class="base__ball" ref="ball" cx="80" cy="80" r="80" />
    </svg>
    <!-- step9+ === multiple refs -->
    <div v-else-if="id >= 9" class="base__ball-outer">
      <div
        v-for="i in 3"
        :key="i"
        :class="`base__ball${i}`"
        :ref="setBallsRef"
      ></div>
    </div>
    <!-- default… -->
    <div v-else class="base__ball-outer">
      <div class="base__ball" ref="ball"></div>
    </div>
    <button @click="onClick" class="base__action">RUN</button>
  </div>
</template>

<script>
import {
  defineComponent,
  // Lifecycle hooks
  // onBeforeMount,
  onMounted,
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

    // Array of DOM elements
    let balls = []
    // Used into `v-for` with `:ref`
    const setBallsRef = el => {
      balls.push(el)
    }

    // Title ref
    const titleRef = ref()

    // Get ID param from current route
    const route = useRoute()
    const id = parseInt(route.params.id, 10) // Use it as an integer
    const currentStep = steps[`step${id}`] // Get current step module prop/method
    const { title, run, appear } = currentStep

    const onClick = () => {
      const targets = id >= 9 ? balls : ball.value // Multiple vs single targets

      run(targets, false)
    }

    // Lifecycle hooks
    // console.log('base:setup', ball.value, balls) // No refs here

    // onBeforeMount(() => {
    //   console.log('base:onBeforeMount', ball.value, balls) // No refs here
    // })
    onMounted(() => {
      console.log('base:onMounted', ball.value, balls) // DOM injected === refs available!!!
      // Do some appear animation on title
      appear && appear(titleRef.value)
    })
    // onBeforeUpdate(() => {
    //   balls = []
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

    return { ball, setBallsRef, titleRef, route, id, title, onClick }
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
  font-weight: 900;
  perspective: 400px;

  @for $i from 1 through 5 {
    .chars#{$i} {
      color: lighten($c-primary, $i * 5%);
      transform-origin: 0 50%;
      transform: rotateY(0);
    }
  }
}

.base__ball-outer {
  position: relative;
  margin-left: $d * 2;
}

[class^='base__ball']:not([class$='-outer']) {
  position: absolute;
  border-radius: 50%;
}

.base__ball,
.base__ball1 {
  width: $d;
  height: $d;
  background: $c-primary;
  fill: $c-primary;
}

.base__ball2 {
  top: $d * 0.125;
  width: $d * 0.75;
  height: $d * 0.75;
  background: lighten($c-primary, 10%);
}

.base__ball3 {
  top: $d * 0.25;
  width: $d * 0.5;
  height: $d * 0.5;
  background: lighten($c-primary, 20%);
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
