import gsap from 'gsap'

export const title = 'Timeline + label'
export const run = targets => {
  console.log('step11', title)

  gsap
    .timeline({
      defaults: {
        duration: 1.5,
        x: 300,
        scale: 2,
        ease: 'bounce',
      },
    })
    .add('start')
    .to(targets[0], {}, 'start') // Time shift, from label
    .to(targets[1], {}, 'start+=0.25') // Time shift, after label
    .to(targets[2], {}, 'start+=0.5') // Time shift, after label
}
