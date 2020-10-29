import gsap from 'gsap'

export const title = 'Timeline'
export const run = (targets, clear = false) => {
  console.log('step5', title)

  gsap
    .timeline()
    .to(targets, {
      duration: 1.5,
      x: 200,
      scale: 2,
      ease: 'bounce',
    })
    // Start after the previous one
    .to(targets, {
      duration: 1.5,
      x: 0,
      scale: 1,
      ease: 'back.inOut(3)',
      clearProps: clear ? 'all' : '',
    })
}
