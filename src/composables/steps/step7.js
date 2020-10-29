import gsap from 'gsap'

export const title = 'Timeline + repeat'
export const run = (targets, clear = false) => {
  console.log('step7', title)

  gsap
    .timeline({
      repeat: -1,
      defaults: {
        duration: 0.5,
      },
    })
    .to(targets, {
      x: 200,
      scale: 2,
      ease: 'bounce',
    })
    .to(targets, {
      x: 0,
      scale: 1,
      ease: 'back.inOut(3)',
    })
    .to(targets, {
      x: -200,
      scale: 2,
      ease: 'bounce',
    })
    .to(targets, {
      x: 0,
      scale: 1,
      ease: 'back.inOut(3)',
      clearProps: clear ? 'all' : '',
    })
}
