import gsap from 'gsap'

export const title = 'Timeline + multiple'
export const run = targets => {
  console.log('step9', title, targets)

  gsap
    .timeline({
      defaults: {
        duration: 1.5,
        ease: 'bounce',
      },
    })
    // 1, 2, 3… so boring
    .to(targets[0], {
      x: 300,
      scale: 2,
    })
    .to(targets[1], {
      x: 300,
      scale: 2,
    })
    .to(targets[2], {
      x: 300,
      scale: 2,
    })
}
