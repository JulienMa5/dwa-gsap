import gsap from 'gsap'

export const title = 'Delays'
export const run = (targets, clear = false) => {
  console.log('step4', title)

  gsap.to(targets, {
    duration: 1.5,
    x: 200,
    scale: 2,
    ease: 'bounce',
  })

  gsap.to(targets, {
    duration: 1.5,
    delay: 1.5, // <- Delay here
    x: 0,
    scale: 1,
    ease: 'back.inOut(3)', // NB: back + ease-in-out + option
    clearProps: clear ? 'all' : '',
  })
}
