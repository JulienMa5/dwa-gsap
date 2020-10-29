import gsap from 'gsap'
// GSAP plugin
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText)

export const title = 'Bonus'
export const run = targets => {
  console.log('step14:run', title)

  gsap.to(targets, {
    duration: 1.5,
    x: 300,
    scale: 2,
    ease: 'bounce',
    stagger: 0.25,
  })
}
// Title appear animation
export const appear = targets => {
  console.log('step14:appear', title)
  // Split the title, add incremental CSS class and position
  const split = new SplitText(targets, {
    type: 'words,chars',
    charsClass: 'chars++',
    // position: 'absolute',
  })

  console.log(split, targets)

  // Animate splitted chars
  gsap.from(split.chars, {
    duration: 0.5,
    opacity: 0,
    scale: 0,
    rotateX: -180,
    transformOrigin: '0% 50% -50',
    ease: 'back',
    stagger: {
      from: 'end',
      each: 0.04,
    },
  })
}
